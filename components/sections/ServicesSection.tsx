import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    illustration: "/images/illustrations/computador.svg",
    illustrationAlt: "Computador desktop com teclado e mouse em tela roxa",
    label: "Assinatura de",
    title: "Computadores",
    description:
      "Notebooks, desktops e tablets das melhores marcas, sempre atualizados, com gestão e manutenção inclusos.",
    href: "/servicos/aluguel-de-computadores",
  },
  {
    illustration: "/images/illustrations/impressoras.svg",
    illustrationAlt: "Profissional ao lado de impressora de escritório",
    label: "Assinatura de",
    title: "Impressoras",
    description:
      "Impressoras de escritório, térmicas e de alta produção. Epson, Xerox e Canon, com toner e manutenção por nossa conta.",
    href: "/servicos/impressoras",
  },
  {
    illustration: "/images/illustrations/saude.svg",
    illustrationAlt: "Médico analisando exame — tecnologia para área da saúde",
    label: "Tecnologias para",
    title: "Área da Saúde",
    description:
      "Equipamentos, software e impressão especializados para clínicas, consultórios e hospitais.",
    href: "/servicos/tecnologias-para-area-da-saude",
  },
];

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-surface py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          subtitle="Conheça nossos serviços de aluguel de computadores, impressoras, equipamentos médicos e software."
        >
          Assinaturas para Todas as Indústrias
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
