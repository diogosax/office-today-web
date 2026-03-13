interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-surface">
      {/* Header */}
      <section className="bg-surface-alt border-b border-border py-12 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-800 text-3xl md:text-4xl text-ink">{title}</h1>
          <p className="mt-3 text-sm text-ink-subtle">
            Última atualização: <time>{lastUpdated}</time>
          </p>
        </div>
      </section>

      {/* Prose */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose-legal">{children}</div>
      </div>
    </div>
  );
}
