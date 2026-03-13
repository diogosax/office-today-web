import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Office Today",
  description:
    "Fale com a equipe da Office Today. Solicite um orçamento gratuito para locação de computadores, impressoras ou soluções para a área da saúde.",
  alternates: { canonical: "https://www.office-today.com/contato" },
};

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContatoPage() {
  return (
    <>
      <Header />

      {siteKey && (
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
          strategy="lazyOnload"
        />
      )}

      <main id="main-content">
        {/* Page hero */}
        <section
          aria-labelledby="contact-heading"
          className="bg-surface-alt border-b border-border py-14 md:py-16"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="inline-block bg-brand/10 text-brand font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Fale conosco
            </p>
            <h1
              id="contact-heading"
              className="font-display font-800 text-3xl md:text-4xl text-ink leading-tight"
            >
              Solicite um Orçamento Gratuito
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed max-w-xl mx-auto">
              Preencha o formulário abaixo e nossa equipe retornará em breve com uma proposta
              personalizada para a sua empresa.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-surface py-14 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Right: trust info */}
              <aside
                className="lg:col-span-2 space-y-8"
                aria-label="Informações de contato e compromisso"
              >
                <div>
                  <h2 className="font-display font-700 text-lg text-ink mb-4">
                    Por que falar com a Office Today?
                  </h2>
                  <ul className="space-y-4">
                    {[
                      {
                        heading: "Resposta rápida",
                        body: "Nossa equipe retorna em até 1 dia útil com uma proposta personalizada.",
                      },
                      {
                        heading: "Sem compromisso",
                        body: "O orçamento é gratuito e sem obrigação de contratação.",
                      },
                      {
                        heading: "Especialistas em TI corporativo",
                        body: "Atendemos empresas de todos os tamanhos com soluções sob medida.",
                      },
                      {
                        heading: "Mensalidade fixa e previsível",
                        body: "Elimine surpresas no orçamento de TI com um contrato claro e transparente.",
                      },
                    ].map((item) => (
                      <li key={item.heading} className="flex gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-brand"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <div>
                          <p className="font-display font-600 text-sm text-ink">{item.heading}</p>
                          <p className="text-sm text-ink-muted leading-relaxed">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-surface-alt border border-border p-5 space-y-3">
                  <p className="font-display font-600 text-sm text-ink">
                    Prefere contato direto?
                  </p>
                  <a
                    href="mailto:contact@office-today.com"
                    className="inline-flex items-center gap-2 text-sm text-brand hover:underline font-display font-500"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    contact@office-today.com
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
