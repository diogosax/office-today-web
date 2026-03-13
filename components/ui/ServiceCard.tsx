import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  illustration: string;
  illustrationAlt: string;
  label: string;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  illustration,
  illustrationAlt,
  label,
  title,
  description,
  href,
}: ServiceCardProps) {
  const content = (
    <div className="group flex flex-col items-center text-center bg-surface rounded-2xl border border-border p-8 hover:border-brand/40 hover:shadow-lg transition-all duration-300 h-full">
      <div className="w-32 h-32 flex items-center justify-center mb-6">
        <Image
          src={illustration}
          alt={illustrationAlt}
          width={128}
          height={128}
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-xs font-display font-600 uppercase tracking-widest text-ink-subtle mb-1">
        {label}
      </p>
      <h3 className="font-display font-700 text-xl text-ink mb-3 group-hover:text-brand transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      {href && (
        <span className="mt-5 text-sm font-display font-600 text-brand group-hover:underline">
          Saiba mais →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-2xl">
        {content}
      </Link>
    );
  }

  return content;
}
