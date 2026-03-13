import Image from "next/image";
import Button from "@/components/ui/Button";

const badges = [
  { icon: "💡", label: "HaaS" },
  { icon: "⚙️", label: "Manutenção Inclusa" },
  { icon: "📋", label: "Customer Support" },
  { icon: "✨", label: "Melhores Marcas" },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-surface py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <p className="inline-block bg-brand/10 text-brand font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              Locação e Gestão de Hardware Corporativo
            </p>

            <h1
              id="hero-heading"
              className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink"
            >
              TI nas{" "}
              <em className="not-italic font-400 text-ink-muted">pontas dos</em>{" "}
              <span className="text-brand">dedos</span>
            </h1>

            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
              A <strong className="text-ink font-600">Office Today</strong> cuida do TI da sua
              empresa para que você possa crescer{" "}
              <strong className="text-ink font-600">sem se preocupar</strong> com computadores,
              impressoras e software. Deixe tudo com a gente!
            </p>

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 bg-surface-alt border border-border text-ink-muted font-display font-500 text-xs px-3 py-1.5 rounded-full"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button href="/contato" variant="primary" className="px-8 py-4 text-base">
                Fazer Orçamento Gratuito
              </Button>
            </div>
          </div>

          {/* Illustration column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="absolute inset-0 bg-brand/5 rounded-3xl -rotate-3 scale-95" aria-hidden="true" />
              <div className="relative bg-surface-alt rounded-3xl p-8 lg:p-10">
                <Image
                  src="/images/illustrations/tecnologia.svg"
                  alt="Profissional em escritório utilizando laptop com suporte completo de TI"
                  width={420}
                  height={380}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
