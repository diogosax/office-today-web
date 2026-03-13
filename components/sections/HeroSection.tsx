import Image from "next/image";
import Button from "@/components/ui/Button";

/* Inline SVG icons — consistent with the rest of the visual system */
const HaaSIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 19.5v-3a3 3 0 013-3h4.5a3 3 0 013 3v3M6.75 4.5v3a3 3 0 003 3h4.5a3 3 0 003-3v-3" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

const BrandsIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const badges: { icon: React.ReactNode; label: string }[] = [
  { icon: <HaaSIcon />, label: "Hardware as a Service" },
  { icon: <MaintenanceIcon />, label: "Manutenção por Nossa Conta" },
  { icon: <SupportIcon />, label: "Suporte Especializado" },
  { icon: <BrandsIcon />, label: "Principais Fabricantes" },
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
              A <strong className="text-ink font-600">Office Today</strong> assume toda a gestão
              de hardware da sua empresa — computadores, impressoras e software.{" "}
              <strong className="text-ink font-600">Um único fornecedor, mensalidade fixa</strong>{" "}
              e suporte especializado.
            </p>

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 bg-surface-alt border border-border text-ink-muted font-display font-500 text-xs px-3 py-1.5 rounded-full"
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button href="/contato" variant="primary" className="px-8 py-4 text-base">
                Solicitar Orçamento Gratuito
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
