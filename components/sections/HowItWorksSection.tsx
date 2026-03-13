import Image from "next/image";

const steps = [
  {
    illustration: "/images/illustrations/manutencao.svg",
    illustrationAlt: "Técnico realizando manutenção em equipamento",
    eyebrow: "Sem preocupações",
    heading: "Manutenção por Nossa Conta",
    body: [
      "Com a locação de equipamentos, sua empresa evita altos custos iniciais, ganha flexibilidade para expandir ou atualizar seus dispositivos e reduz o tempo de inatividade.",
      "Cuidamos de toda a gestão e manutenção dos equipamentos, além de oferecer um suporte personalizado para cada setor, garantindo que suas operações nunca parem e sempre tenham a tecnologia ideal para cada momento.",
    ],
    imageRight: false,
  },
  {
    illustration: "/images/illustrations/especialista.svg",
    illustrationAlt: "Especialista de TI auxiliando equipe empresarial",
    eyebrow: "Hardware as a Service",
    heading: "TI Terceirizado, Negócio Focado",
    body: [
      "Com o modelo Hardware as a Service (HaaS), a Office Today permite que sua empresa terceirize grande parte ou até mesmo todas as necessidades internas de TI.",
      "Nossa solução de locação de tecnologia é projetada para atender as necessidades da empresa moderna, garantindo acesso a equipamentos de ponta sem custos elevados de aquisição. Deixe a gestão e manutenção conosco, e foque no que realmente importa: o crescimento do seu negócio.",
    ],
    imageRight: true,
  },
];

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-surface-alt py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="how-it-works-heading"
            className="font-display font-700 text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-ink"
          >
            Como Funciona
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Um modelo completo que cobre equipamento, gestão e suporte — tudo em uma mensalidade
            previsível.
          </p>
        </div>

        <div className="space-y-20">
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
