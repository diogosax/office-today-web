import Button from "@/components/ui/Button";

export default function CtaBandSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-surface-dark py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-block bg-brand/20 text-brand-light font-display font-600 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
          Fale com um especialista
        </p>
        <h2
          id="cta-heading"
          className="font-display font-400 text-3xl md:text-4xl lg:text-5xl leading-tight text-white italic"
        >
          Transforme sua{" "}
          <strong className="font-800 not-italic text-brand">Experiência</strong>{" "}
          com{" "}
          <strong className="font-800 not-italic text-brand">TI</strong>
        </h2>
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Fale com nossos especialistas e descubra como simplificar o TI da sua empresa com
          previsibilidade de custos, suporte dedicado e equipamentos sempre atualizados.
        </p>
        <div className="mt-8">
          <Button href="/contato" variant="primary" className="px-10 py-4 text-base">
            Fazer Orçamento Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
}
