interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex gap-4 items-start p-6 rounded-xl bg-surface border border-border hover:border-brand/30 hover:shadow-sm transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-700 text-base text-ink mb-1">{title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
