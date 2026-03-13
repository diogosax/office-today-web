import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePageHero from "@/components/sections/ServicePageHero";
import CtaBandSection from "@/components/sections/CtaBandSection";

export const metadata: Metadata = {
  title: "Locação de Impressoras para Empresas — Office Today",
  description:
    "Aluguel de impressoras de escritório, térmicas e de alta produção. Epson, Xerox, Canon, Brother e Konica — toner, manutenção e suporte em mensalidade fixa.",
  alternates: {
    canonical: "https://www.office-today.com/servicos/impressoras",
  },
};

const features = [
  {
    heading: "Impressoras de Escritório",
    body: "Equipamentos laser e jato de tinta para uso diário em escritórios de todos os tamanhos, com impressão colorida ou mono de alta qualidade.",
  },
  {
    heading: "Impressoras Térmicas",
    body: "Soluções ideais para etiquetas, tickets e comprovantes em ambientes de comércio, logística e varejo.",
  },
  {
    heading: "Alta Produção e Gráficas",
    body: "Equipamentos de grande volume para gráficas e empresas com demanda intensiva de impressão, com velocidade e confiabilidade industriais.",
  },
  {
    heading: "Toner e Insumos Inclusos",
    body: "Esqueça a gestão de consumíveis. Toner, tambores e insumos são repostos automaticamente pela Office Today antes de acabar.",
  },
  {
    heading: "Manutenção Preventiva e Corretiva",
    body: "Peças, mão de obra e visitas técnicas on-site estão todos cobertos. Mantemos seus equipamentos operando sem interruções.",
  },
  {
    heading: "Previsibilidade de Custos",
    body: "Uma mensalidade fixa cobre tudo: equipamento, toner e manutenção. Sem surpresas no orçamento ao fim do mês.",
  },
];

const printerBrands = [
  { name: "Epson", src: "/images/partners/epson.svg", width: 90 },
  { name: "Xerox", src: "/images/partners/xerox.svg", width: 80 },
  { name: "Canon", src: "/images/partners/canon.svg", width: 80 },
  { name: "Brother", src: "/images/partners/brother.svg", width: 100 },
  { name: "Konica Minolta", src: "/images/partners/konica.svg", width: 110 },
];

export default function ImpressorasPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServicePageHero
          eyebrow="Serviço · Impressoras"
          heading="Locação de Impressoras para Empresas"
          description="Da impressora de escritório ao equipamento de alta produção — Office Today oferece locação completa com toner, manutenção e suporte inclusos. Mensalidade fixa, zero surpresas."
          illustration="/images/illustrations/impressoras.svg"
          illustrationAlt="Profissional retirando documento de impressora de escritório"
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
                Soluções para Cada Necessidade
              </h2>
              <p className="mt-3 text-base md:text-lg text-ink-muted max-w-2xl mx-auto">
                Do escritório à gráfica, temos o equipamento certo com gestão completa de ponta
                a ponta.
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

        {/* Partner logos */}
        <section
          aria-labelledby="brands-heading"
          className="bg-surface py-12 border-y border-border"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p
              id="brands-heading"
              className="text-center text-sm font-display font-600 text-ink-subtle uppercase tracking-widest mb-8"
            >
              Fabricantes com que trabalhamos
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {printerBrands.map((brand) => (
                <Image
                  key={brand.name}
                  src={brand.src}
                  alt={`Logo ${brand.name}`}
                  width={brand.width}
                  height={40}
                  className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
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
