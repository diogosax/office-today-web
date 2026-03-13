import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import CtaBandSection from "@/components/sections/CtaBandSection";

export const metadata: Metadata = {
  title: "Aluguel de Computadores para Empresas — Office Today",
  description:
    "Locação de notebooks, desktops e tablets com gestão, manutenção e suporte inclusos. Equipamentos Lenovo e outros fabricantes líderes em mensalidade fixa.",
  alternates: {
    canonical: "https://www.office-today.com/servicos/aluguel-de-computadores",
  },
};

const features = [
  {
    heading: "Notebooks, Desktops e Tablets",
    body: "Equipamentos das melhores marcas do mercado, selecionados conforme o perfil de uso da sua equipe — do trabalho de campo ao escritório.",
  },
  {
    heading: "Configuração sob Medida",
    body: "Cada equipamento é pré-configurado com o sistema operacional, software e políticas de segurança definidos pela sua empresa antes da entrega.",
  },
  {
    heading: "Manutenção e Suporte Inclusos",
    body: "Falhas de hardware, substituição de peças e suporte técnico on-site estão todos cobertos na mensalidade. Zero custo extra, zero tempo perdido.",
  },
  {
    heading: "Atualização Periódica",
    body: "Ao fim do ciclo contratual, os equipamentos podem ser renovados para modelos mais recentes — mantendo sua equipe sempre produtiva.",
  },
  {
    heading: "Gestão Centralizada",
    body: "Acompanhe o inventário, o status de cada dispositivo e o histórico de manutenção com total transparência e controle.",
  },
  {
    heading: "Escalabilidade Imediata",
    body: "Precisa adicionar novos colaboradores ou abrir uma filial? Escale o parque de equipamentos rapidamente, sem burocracia de compra.",
  },
];

export default function AluguelDeComputadoresPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServicePageHero
          eyebrow="Serviço · Computadores"
          heading="Aluguel de Computadores para Empresas"
          description="Equipe sua empresa com notebooks, desktops e tablets das melhores marcas, sem custo de aquisição. Gestão, manutenção e suporte técnico inclusos em uma mensalidade fixa e previsível."
          illustration="/images/illustrations/computador.svg"
          illustrationAlt="Computador desktop com monitor, teclado e mouse"
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
                O que está incluído
              </h2>
              <p className="mt-3 text-base md:text-lg text-ink-muted max-w-2xl mx-auto">
                Um pacote completo que vai além do hardware — para que sua empresa foque no
                crescimento.
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

        {/* Why HaaS over buying */}
        <section
          aria-labelledby="why-haas-heading"
          className="bg-surface py-14 md:py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="why-haas-heading"
              className="font-display font-700 text-2xl md:text-3xl text-ink mb-5"
            >
              Por que locar em vez de comprar?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  stat: "0",
                  unit: "R$",
                  label: "Investimento inicial",
                  desc: "Sem capex. Tudo na mensalidade.",
                },
                {
                  stat: "100%",
                  unit: "",
                  label: "Manutenção coberta",
                  desc: "Hardware, peças e suporte inclusos.",
                },
                {
                  stat: "1",
                  unit: "fornecedor",
                  label: "Para todo o parque",
                  desc: "Gestão centralizada e simplificada.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-surface-alt border border-border p-6"
                >
                  <p className="font-display font-800 text-4xl text-brand">
                    {item.stat}
                    {item.unit && (
                      <span className="text-xl ml-1 font-600">{item.unit}</span>
                    )}
                  </p>
                  <p className="font-display font-700 text-sm text-ink mt-1">{item.label}</p>
                  <p className="text-xs text-ink-muted mt-1">{item.desc}</p>
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
