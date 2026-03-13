"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

export default function NavLink({ href, children, onClick, mobile = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  if (mobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`block px-4 py-3 rounded-lg font-display font-500 text-base transition-colors duration-150 ${
          isActive
            ? "bg-brand/10 text-brand"
            : "text-ink hover:bg-surface-alt hover:text-brand"
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`relative font-display font-500 text-sm transition-colors duration-150 py-1 ${
        isActive
          ? "text-brand"
          : "text-ink hover:text-brand"
      } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-brand after:transition-all after:duration-200 ${
        isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
      }`}
    >
      {children}
    </Link>
  );
}
