import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  { name: "Epson", src: "/images/partners/epson.svg", width: 100 },
  { name: "Xerox", src: "/images/partners/xerox.svg", width: 90 },
  { name: "Konica Minolta", src: "/images/partners/konica.svg", width: 120 },
  { name: "Brother", src: "/images/partners/brother.svg", width: 110 },
  { name: "Zebra Technologies", src: "/images/partners/zebra.svg", width: 90 },
  { name: "Lenovo", src: "/images/partners/lenovo.svg", width: 100 },
  { name: "Honeywell", src: "/images/partners/honeywell.svg", width: 120 },
  { name: "Canon", src: "/images/partners/canon.svg", width: 90 },
];

export default function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="bg-surface py-14 md:py-16 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="partners-heading"
          subtitle="Office Today trabalha com algumas das principais e mais confiáveis fabricantes de tecnologia do mundo."
        >
          Melhores Fabricantes de Tecnologia
        </SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 rounded-xl hover:bg-surface-alt transition-colors duration-200"
            >
              <Image
                src={partner.src}
                alt={`Logo ${partner.name}`}
                width={partner.width}
                height={48}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
