"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  recaptchaToken: string;
}

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Skip verification in development when credentials are not set
  if (!projectId || !apiKey) {
    console.warn("[contact] RECAPTCHA_PROJECT_ID or RECAPTCHA_API_KEY not set — skipping verification.");
    return true;
  }

  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token,
            siteKey,
            expectedAction: "contact_form",
          },
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("[contact] reCAPTCHA Enterprise API error:", response.status, await response.text());
      return false;
    }

    const data = await response.json();

    // Token must be valid
    if (data.tokenProperties?.valid !== true) {
      console.warn("[contact] reCAPTCHA token invalid:", data.tokenProperties?.invalidReason);
      return false;
    }

    // Action must match what the form submitted
    const returnedAction = data.tokenProperties?.action;
    if (returnedAction && returnedAction !== "contact_form") {
      console.warn("[contact] reCAPTCHA action mismatch:", returnedAction);
      return false;
    }

    // Score >= 0.5 is considered human traffic
    const score: number = data.riskAnalysis?.score ?? 0;
    return score >= 0.5;
  } catch (err) {
    console.error("[contact] reCAPTCHA Enterprise verification error:", err);
    return false;
  }
}

function buildEmailHtml(data: Omit<ContactFormData, "recaptchaToken">): string {
  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const rows = [
    ["Nome", data.name],
    ["Empresa", data.company],
    ["E-mail", data.email],
    ["Telefone", data.phone || "—"],
    ["Serviço de interesse", data.service],
  ]
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:6px 12px 6px 0;font-weight:600;color:#555;white-space:nowrap;vertical-align:top;">${label}:</td>
          <td style="padding:6px 0;color:#333;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;color:#333;max-width:600px;margin:0 auto;padding:24px;">
  <h2 style="color:#ab0dff;margin-bottom:20px;">Novo contato via website — Office Today</h2>
  <table style="border-collapse:collapse;width:100%;margin-bottom:24px;">
    ${rows}
  </table>
  <h3 style="color:#555;margin-bottom:8px;">Mensagem:</h3>
  <div style="background:#f5f5f5;border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px;line-height:1.6;">
    ${escapeHtml(data.message)}
  </div>
  <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;">
  <p style="font-size:12px;color:#888;">
    Enviado via formulário de contato — office-today.com
  </p>
</body>
</html>`;
}

function buildEmailText(data: Omit<ContactFormData, "recaptchaToken">): string {
  return [
    "Novo contato via website — Office Today",
    "",
    `Nome: ${data.name}`,
    `Empresa: ${data.company}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.phone || "—"}`,
    `Serviço de interesse: ${data.service}`,
    "",
    "Mensagem:",
    data.message,
    "",
    "---",
    "Enviado via formulário de contato — office-today.com",
  ].join("\n");
}

function getSESClient(): SESClient {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error("Missing AWS SES environment variables (AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY).");
  }

  return new SESClient({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // Basic server-side field validation
  if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
    return { success: false, error: "Preencha todos os campos obrigatórios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: "Endereço de e-mail inválido." };
  }

  // reCAPTCHA verification
  const isHuman = await verifyRecaptcha(formData.recaptchaToken);
  if (!isHuman) {
    return {
      success: false,
      error: "Verificação de segurança falhou. Por favor, tente novamente.",
    };
  }

  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    console.error("[contact] SES_FROM_EMAIL or CONTACT_TO_EMAIL is not configured.");
    return {
      success: false,
      error: "Serviço de e-mail não configurado. Entre em contato por outro canal.",
    };
  }

  const { name, company, email, phone, service, message } = formData;

  let sesClient: SESClient;
  try {
    sesClient = getSESClient();
  } catch (err) {
    console.error("[contact] SES configuration error:", err);
    return {
      success: false,
      error: "Serviço de e-mail não configurado. Entre em contato por outro canal.",
    };
  }

  try {
    await sesClient.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `Novo contato: ${name}${company ? ` — ${company}` : ""}`,
            Charset: "UTF-8",
          },
          Body: {
            Html: { Data: buildEmailHtml({ name, company, email, phone, service, message }), Charset: "UTF-8" },
            Text: { Data: buildEmailText({ name, company, email, phone, service, message }), Charset: "UTF-8" },
          },
        },
      })
    );

    return { success: true };
  } catch (err) {
    console.error("[contact] SES send error:", err);
    return { success: false, error: "Erro ao enviar mensagem. Tente novamente em breve." };
  }
}
