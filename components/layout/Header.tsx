"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NavLink from "@/components/ui/NavLink";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Serviços",
    children: [
      { href: "/aluguel-de-computadores", label: "Aluguel de Computadores" },
      { href: "/tecnologias-para-area-da-saude", label: "Tecnologias para Área da Saúde" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburguerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        hamburguerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm border-b border-border"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
              aria-label="Office Today — Página inicial"
            >
              <Image
                src="/images/logo.svg"
                alt="Office Today"
                width={180}
                height={38}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              role="navigation"
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-7"
            >
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button
                      className="flex items-center gap-1 font-display font-500 text-sm text-ink hover:text-brand transition-colors duration-150 py-1 cursor-pointer"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    >
                      {item.label}
                      <svg
                        className="w-3.5 h-3.5 text-ink-subtle group-hover:text-brand transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <ul
                      className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-xl shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-3 text-sm font-display text-ink hover:text-brand hover:bg-surface-alt transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavLink key={item.href} href={item.href!}>
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button href="/contato" variant="primary">
                Orçamento Gratuito
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={hamburguerRef}
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-surface-alt transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-hidden="true"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-full bg-white shadow-2xl flex flex-col transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Link href="/" onClick={closeMobile} aria-label="Office Today — Página inicial">
            <Image
              src="/images/logo.svg"
              alt="Office Today"
              width={140}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={closeMobile}
            aria-label="Fechar menu"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-ink hover:bg-surface-alt transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1" aria-label="Menu móvel">
          <NavLink href="/" mobile onClick={closeMobile}>Home</NavLink>

          {/* Services group */}
          <div>
            <p className="px-4 pt-3 pb-1 text-xs font-display font-600 uppercase tracking-widest text-ink-subtle">
              Serviços
            </p>
            <NavLink href="/aluguel-de-computadores" mobile onClick={closeMobile}>
              Aluguel de Computadores
            </NavLink>
            <NavLink href="/tecnologias-para-area-da-saude" mobile onClick={closeMobile}>
              Tecnologias para Área da Saúde
            </NavLink>
          </div>

          <NavLink href="/blog" mobile onClick={closeMobile}>Blog</NavLink>
          <NavLink href="/contato" mobile onClick={closeMobile}>Contato</NavLink>
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 py-5 border-t border-border">
          <Button href="/contato" variant="primary" className="w-full" onClick={closeMobile}>
            Orçamento Gratuito
          </Button>
        </div>
      </div>

      {/* Spacer so content doesn't go under the fixed header */}
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
}
