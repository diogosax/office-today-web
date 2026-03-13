import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import CtaBandSection from "@/components/sections/CtaBandSection";

export const metadata: Metadata = {
  title: "Tecnologias para Área da Saúde — Office Today",
  description:
    "Soluções completas de TI para clínicas, consultórios e hospitais. Equipamentos, software e impressão com suporte especializado e mensalidade fixa.",
  alternates: {
    canonical: "https://www.office-today.com/servicos/tecnologias-para-area-da-saude",
  },
};

const features = [
  {
    heading: "Equipamentos para Clínicas e Consultórios",
    body: "Computadores, tablets e monitores configurados para os principais sistemas de gestão clínica (prontuário eletrônico, agendamento, faturamento).",
  },
  {
    heading: "Impressão para Área da Saúde",
    body: "Impressoras de pulseiras, etiquetas de medicamentos, fichas de pacientes e receituários — com insumos e manutenção inclusos.",
  },
  {
    heading: "Suporte Técnico Dedicado",
    body: "Equipe especializada em ambientes de saúde, com conhecimento dos fluxos e necessidades específicas de clínicas e hospitais.",
  },
  {
    heading: "Infraestrutura para Hospitais",
    body: "Soluções escaláveis para unidades hospitalares: terminais de acesso por setor, equipamentos de recepção e postos de enfermagem.",
  },
  {
    heading: "Conformidade e Segurança",
    body: "Equipamentos pré-configurados com foco em segurança de dados de pacientes, seguindo as melhores práticas do setor.",
  },
  {
    heading: "Manutenção sem Interrupções",
    body: "Na área da saúde, tempo de inatividade não é aceitável. Nossa equipe garante substituição rápida e suporte prioritário.",
  },
];

const segments = [
  { label: "Clínicas médicas e odontológicas" },
  { label: "Consultórios especializados" },
  { label: "Hospitais e UPAs" },
  { label: "Laboratórios de análises clínicas" },
  { label: "Clínicas de imagem" },
  { label: "Farmácias e drogarias" },
];

export default function TecnologiasParaAreaDaSaudePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServicePageHero
          eyebrow="Serviço · Área da Saúde"
          heading="Tecnologias para Área da Saúde"
          description="Equipamentos, software e soluções de impressão especializados para clínicas, consultórios e hospitais. Infraestrutura de TI completa com suporte dedicado e mensalidade previsível."
          illustration="/images/illustrations/saude.svg"
          illustrationAlt="Profissional de saúde analisando exame médico com suporte de TI especializado"
        />

        {/* Features */}
        <section
          aria-labelledby="features-heading"
          className="bg-surface-alt py-14 md:py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2
                id="features-heading"
                className="font-display font-700 text-3xl md:text-4xl text-ink"
              >
                Soluções Especializadas para Saúde
              </h2>
              <p className="mt-3 text-base md:text-lg text-ink-muted max-w-2xl mx-auto">
                Entendemos que na área da saúde, a tecnologia precisa ser confiável, rápida e
                discreta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feat) => (
                <div
                  key={feat.heading}
                  className="bg-surface rounded-xl border border-border p-6 hover:border-brand/30 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-4 h-4 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-700 text-base text-ink mb-2">
                    {feat.heading}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{feat.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segments served */}
        <section
          aria-labelledby="segments-heading"
          className="bg-surface py-14 md:py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2
                id="segments-heading"
                className="font-display font-700 text-2xl md:text-3xl text-ink"
              >
                Atendemos todos os segmentos de saúde
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {segments.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-center gap-3 bg-surface-alt border border-border rounded-lg px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-display font-500 text-ink">{seg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBandSection />
      </main>
      <Footer />
    </>
  );
}
