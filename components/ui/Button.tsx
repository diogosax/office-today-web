import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display font-600 text-sm leading-none transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-brand border border-brand hover:bg-brand hover:text-white",
    ghost:
      "bg-transparent text-brand hover:bg-brand/10 border border-transparent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
