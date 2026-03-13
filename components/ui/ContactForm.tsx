"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { submitContactForm } from "@/app/actions/contact";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const SERVICE_OPTIONS = [
  { value: "", label: "Selecione um serviço…" },
  { value: "Aluguel de Computadores", label: "Aluguel de Computadores" },
  { value: "Locação de Impressoras", label: "Locação de Impressoras" },
  { value: "Tecnologias para Área da Saúde", label: "Tecnologias para Área da Saúde" },
  { value: "Hardware as a Service (HaaS)", label: "Hardware as a Service (HaaS)" },
  { value: "Outro / Consulta geral", label: "Outro / Consulta geral" },
];

interface FieldError {
  name?: string;
  company?: string;
  email?: string;
  service?: string;
  message?: string;
}

function validate(fields: {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
}): FieldError {
  const errors: FieldError = {};
  if (!fields.name.trim()) errors.name = "Por favor, informe seu nome.";
  if (!fields.company.trim()) errors.company = "Por favor, informe o nome da empresa.";
  if (!fields.email.trim()) {
    errors.email = "Por favor, informe seu e-mail.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Endereço de e-mail inválido.";
  }
  if (!fields.service) errors.service = "Por favor, selecione o serviço de interesse.";
  if (!fields.message.trim()) errors.message = "Por favor, escreva sua mensagem.";
  else if (fields.message.trim().length < 10)
    errors.message = "A mensagem deve ter ao menos 10 caracteres.";
  return errors;
}

const inputBase =
  "w-full px-4 py-3 bg-white border rounded-lg text-ink text-sm font-sans placeholder:text-ink-subtle transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand";
const inputDefault = "border-border";
const inputError = "border-red-400 focus:ring-red-400 focus:border-red-400";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const validation = validate(fields);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      const firstErrorKey = Object.keys(validation)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");

    let recaptchaToken = "";
    if (siteKey && typeof window !== "undefined" && window.grecaptcha) {
      try {
        recaptchaToken = await new Promise<string>((resolve, reject) => {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(siteKey, {
                action: "contact_form",
              });
              resolve(token);
            } catch (err) {
              reject(err);
            }
          });
        });
      } catch {
        // Non-fatal: proceed without token; server will handle gracefully
      }
    }

    const result = await submitContactForm({
      ...fields,
      recaptchaToken,
    });

    if (result.success) {
      setStatus("success");
      setFields({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    } else {
      setStatus("error");
      setServerError(result.error || "Erro ao enviar. Tente novamente.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-surface-alt border border-border p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-display font-700 text-xl text-ink mb-2">Mensagem enviada!</h3>
        <p className="text-ink-muted text-sm leading-relaxed">
          Obrigado pelo contato. Nossa equipe retornará em breve.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-display font-600 text-brand hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1: Nome + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-display font-600 text-ink mb-1.5">
            Nome <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome completo"
            value={fields.name}
            onChange={set("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? inputError : inputDefault}`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-display font-600 text-ink mb-1.5">
            Empresa <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nome da empresa"
            value={fields.company}
            onChange={set("company")}
            aria-describedby={errors.company ? "company-error" : undefined}
            aria-invalid={!!errors.company}
            className={`${inputBase} ${errors.company ? inputError : inputDefault}`}
          />
          {errors.company && (
            <p id="company-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.company}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: E-mail + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-display font-600 text-ink mb-1.5">
            E-mail <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@empresa.com.br"
            value={fields.email}
            onChange={set("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            className={`${inputBase} ${errors.email ? inputError : inputDefault}`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-display font-600 text-ink mb-1.5">
            Telefone{" "}
            <span className="text-ink-subtle font-400">(opcional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 99999-9999"
            value={fields.phone}
            onChange={set("phone")}
            className={`${inputBase} ${inputDefault}`}
          />
        </div>
      </div>

      {/* Serviço de interesse */}
      <div>
        <label htmlFor="service" className="block text-sm font-display font-600 text-ink mb-1.5">
          Serviço de interesse <span className="text-brand" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={fields.service}
          onChange={set("service")}
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={!!errors.service}
          className={`${inputBase} ${errors.service ? inputError : inputDefault} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_12px_center] bg-[length:18px] pr-10`}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.service}
          </p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-display font-600 text-ink mb-1.5">
          Mensagem <span className="text-brand" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Descreva o que sua empresa precisa…"
          value={fields.message}
          onChange={set("message")}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          className={`${inputBase} ${errors.message ? inputError : inputDefault} resize-none`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {serverError}
        </div>
      )}

      {/* Submit */}
      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          className={`w-full py-3.5 text-sm justify-center ${status === "submitting" ? "opacity-70 pointer-events-none" : ""}`}
        >
          {status === "submitting" ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando…
            </>
          ) : (
            "Solicitar Orçamento Gratuito"
          )}
        </Button>
      </div>

      {/* Legal consent */}
      <p className="text-xs text-ink-subtle leading-relaxed">
        Ao enviar este formulário, você concorda com nossa{" "}
        <Link href="/politica-de-privacidade" className="text-brand hover:underline">
          Política de Privacidade
        </Link>{" "}
        e nossos{" "}
        <Link href="/termos-de-servico" className="text-brand hover:underline">
          Termos de Serviço
        </Link>
        .
      </p>

      {/* reCAPTCHA disclosure */}
      {siteKey && (
        <p className="text-xs text-ink-subtle leading-relaxed">
          Este site é protegido pelo reCAPTCHA e a{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Política de Privacidade
          </a>{" "}
          e os{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:underline"
          >
            Termos de Serviço
          </a>{" "}
          do Google se aplicam.
        </p>
      )}
    </form>
  );
}
