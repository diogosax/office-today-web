import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Quem Somos | Office Today",
  description:
    "Conheça a Office Today: soluções de locação e gestão de hardware corporativo para empresas nos Estados Unidos e no Brasil.",
};

const pillars = [
  {
    title: "Praticidade",
    description:
      "Equipamentos entregues, configurados e prontos para usar — sem fricção para a sua equipe.",
  },
  {
    title: "Previsibilidade",
    description:
      "Custos fixos mensais, sem surpresas no orçamento de TI da sua empresa.",
  },
  {
    title: "Flexibilidade",
    description:
      "Contratos adaptáveis ao ritmo de crescimento e às necessidades do seu negócio.",
  },
  {
    title: "Suporte especializado",
    description:
      "Atendimento técnico dedicado em todas as etapas do ciclo de vida dos equipamentos.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <Header />
      <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-4">
            Quem Somos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            Tecnologia corporativa entregue com praticidade, previsibilidade e suporte.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A Office Today é especialista em locação e gestão de hardware
            corporativo para empresas que valorizam eficiência, controle de
            custos e continuidade operacional.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                O que fazemos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Oferecemos soluções completas de locação de equipamentos de TI —
                computadores, notebooks, periféricos e infraestrutura — com
                gestão, manutenção e suporte especializado incluídos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nosso modelo permite que empresas de todos os portes equipe suas
                equipes com tecnologia de ponta sem os custos e riscos de
                aquisição direta, mantendo o foco no que realmente importa: o
                negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional positioning */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Posicionamento Institucional
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
            Um representante do{" "}
            <span className="text-brand">Grupo Office Total S.A</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            A Office Today atua como representante autorizado do Grupo Office
            Total S.A — grupo com sólida experiência no mercado de tecnologia
            corporativa. Essa parceria sustenta nossa capacidade de entregar
            soluções robustas, confiáveis e alinhadas às melhores práticas do
            setor.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Combinamos a agilidade de uma operação focada com o respaldo
            estrutural de um grupo consolidado, garantindo credibilidade e
            continuidade para cada cliente que nos escolhe.
          </p>
        </div>
      </section>

      {/* Where we are */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Nossa Presença
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Onde estamos
            </h2>
            <p className="mt-2 text-gray-500">
              Atuação nos Estados Unidos e no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* USA */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  US
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Estados Unidos
                </h3>
              </div>
              <address className="not-italic text-gray-600 leading-7">
                <p>9669 Avellino Ave, Unit 6417 Office 343</p>
                <p>Orlando, FL 32819</p>
                <p className="mt-1 text-sm text-gray-400">United States</p>
              </address>
            </div>

            {/* Brazil */}
            <div className="rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  BR
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Brasil
                </h3>
              </div>
              <address className="not-italic text-gray-600 leading-7">
                <p>Rodovia Governador Mário Covas, 1941</p>
                <p>km 281, Galpão 001</p>
                <p>Bairro Padre Mathias</p>
                <p>Cariacica – ES</p>
                <p className="mt-1 text-sm text-gray-400">CEP 29157-900</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para equipar sua empresa?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Entre em contato com nossa equipe e descubra como a Office Today
            pode simplificar a gestão de tecnologia do seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
