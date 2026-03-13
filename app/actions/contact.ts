"use server";

import { Resend } from "resend";

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
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Skip verification in development when no key is set
  if (!secret) {
    console.warn("[contact] RECAPTCHA_SECRET_KEY is not set — skipping verification.");
    return true;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
      cache: "no-store",
    });

    const data = await response.json();

    // reCAPTCHA v3: score >= 0.5 is considered human traffic
    return data.success === true && (data.score ?? 0) >= 0.5;
  } catch (err) {
    console.error("[contact] reCAPTCHA verification error:", err);
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return {
      success: false,
      error: "Serviço de e-mail não configurado. Entre em contato por outro canal.",
    };
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@office-today.com";

  const { name, company, email, phone, service, message } = formData;

  try {
    const { error } = await resend.emails.send({
      from: "Office Today Website <noreply@office-today.com>",
      to: toEmail,
      replyTo: email,
      subject: `Novo contato: ${name}${company ? ` — ${company}` : ""}`,
      html: buildEmailHtml({ name, company, email, phone, service, message }),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return { success: false, error: "Erro ao enviar mensagem. Tente novamente em breve." };
    }

    return { success: true };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return { success: false, error: "Erro inesperado. Por favor, tente novamente." };
  }
}
