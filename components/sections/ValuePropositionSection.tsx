import Image from "next/image";

export default function ValuePropositionSection() {
  return (
    <section
      aria-labelledby="value-prop-heading"
      className="bg-surface-alt py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/images/illustrations/haas.svg"
              alt="Setup de trabalho com laptop, café e documentos — representando tecnologia por assinatura"
              width={400}
              height={360}
              className="w-full max-w-sm lg:max-w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="inline-block bg-brand/10 text-brand font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              Modelo de Assinatura
            </p>
            <h2
              id="value-prop-heading"
              className="font-display font-700 text-3xl md:text-4xl text-ink leading-tight mb-6"
            >
              Tecnologia por Assinatura
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                Tecnologia por assinatura é a maneira moderna e prática de equipar sua empresa com
                os melhores dispositivos, das melhores e mais conhecidas marcas,{" "}
                <strong className="text-ink font-600">sem a necessidade de compra</strong>.
              </p>
              <p>
                Com esse modelo, você pode ter sempre equipamentos atualizados e compatíveis com
                suas necessidades, pagando uma{" "}
                <strong className="text-ink font-600">mensalidade fixa</strong>. Assim, a Office
                Today ajuda sua empresa a manter o foco no que realmente importa, deixando toda a
                gestão e manutenção dos dispositivos por nossa conta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
