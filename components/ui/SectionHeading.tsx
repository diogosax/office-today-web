interface SectionHeadingProps {
  tag?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export default function SectionHeading({
  tag: Tag = "h2",
  children,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignClass} mb-10 md:mb-14`}>
      <Tag
        id={id}
        className="font-display font-700 text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-ink"
      >
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
