import Image from "next/image";
import Button from "@/components/ui/Button";

interface ServicePageHeroProps {
  eyebrow: string;
  heading: string;
  description: string;
  illustration: string;
  illustrationAlt: string;
  ctaLabel?: string;
}

export default function ServicePageHero({
  eyebrow,
  heading,
  description,
  illustration,
  illustrationAlt,
  ctaLabel = "Solicitar Orçamento Gratuito",
}: ServicePageHeroProps) {
  return (
    <section
      aria-labelledby="service-hero-heading"
      className="bg-surface py-14 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <p className="inline-block bg-brand/10 text-brand font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              {eyebrow}
            </p>
            <h1
              id="service-hero-heading"
              className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink"
            >
              {heading}
            </h1>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button href="/contato" variant="primary" className="px-7 py-3.5">
                {ctaLabel}
              </Button>
              <Button href="/contato" variant="secondary" className="px-7 py-3.5">
                Falar com um especialista
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div
                className="absolute inset-0 bg-brand/5 rounded-3xl -rotate-3 scale-95"
                aria-hidden="true"
              />
              <div className="relative bg-surface-alt rounded-3xl p-8">
                <Image
                  src={illustration}
                  alt={illustrationAlt}
                  width={420}
                  height={380}
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
