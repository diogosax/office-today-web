import Image from "next/image";

const steps = [
  {
    illustration: "/images/illustrations/manutencao.svg",
    illustrationAlt: "Técnico realizando manutenção em equipamento de TI",
    eyebrow: "Gestão Completa",
    heading: "Manutenção por Nossa Conta",
    body: [
      "Com a locação de equipamentos, sua empresa elimina custos iniciais elevados, ganha flexibilidade para escalar ou atualizar os dispositivos e reduz o tempo de inatividade operacional.",
      "Assumimos toda a gestão e manutenção do parque de equipamentos, com suporte técnico dedicado a cada setor — para que as suas operações nunca parem e sempre contem com a tecnologia adequada.",
    ],
    imageRight: false,
  },
  {
    illustration: "/images/illustrations/especialista.svg",
    illustrationAlt: "Especialista de TI auxiliando equipe empresarial",
    eyebrow: "Hardware as a Service",
    heading: "Terceirize o TI. Foque no Negócio.",
    body: [
      "Com o modelo Hardware as a Service (HaaS), a Office Today permite que a sua empresa externalize parte ou a totalidade das necessidades de infraestrutura de TI.",
      "Nossa solução é projetada para a empresa moderna: acesso a equipamentos de ponta, sem o custo de aquisição, com custos previsíveis e gestão centralizada. Você foca no crescimento — o TI fica por nossa conta.",
    ],
    imageRight: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-surface-alt py-14 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            id="how-it-works-heading"
            className="font-display font-700 text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-ink"
          >
            Como Funciona
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Equipamento, gestão e suporte técnico em uma única mensalidade — previsível e sem
            surpresas.
          </p>
        </div>

        <div className="space-y-14">
          {steps.map((step) => (
            <div
              key={step.heading}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
            >
              {/* Illustration */}
              <div
                className={`flex justify-center ${
                  step.imageRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={step.illustration}
                  alt={step.illustrationAlt}
                  width={380}
                  height={340}
                  className="w-full max-w-xs lg:max-w-sm h-auto"
                />
              </div>

              {/* Text */}
              <div className={step.imageRight ? "lg:order-1" : "lg:order-2"}>
                <p className="inline-block bg-brand/10 text-brand font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  {step.eyebrow}
                </p>
                <h3 className="font-display font-700 text-2xl md:text-3xl text-ink mb-5 leading-snug">
                  {step.heading}
                </h3>
                <div className="space-y-4 text-ink-muted leading-relaxed">
                  {step.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
