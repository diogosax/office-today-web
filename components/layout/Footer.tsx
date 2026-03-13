import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/servicos/aluguel-de-computadores", label: "Aluguel de Computadores" },
  { href: "/servicos/impressoras", label: "Impressoras" },
  { href: "/servicos/tecnologias-para-area-da-saude", label: "Tecnologias para Área da Saúde" },
];

const companyLinks = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const legalLinks = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/termos-de-servico", label: "Termos de Serviço" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Office Today — Página inicial">
              <Image
                src="/images/logo.svg"
                alt="Office Today"
                width={160}
                height={34}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              Soluções completas de locação e gestão de hardware para empresas. Tecnologia de ponta,
              custos previsíveis e suporte técnico especializado.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/office-today-br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Office Today no LinkedIn"
              className="mt-5 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-brand transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-700 text-sm uppercase tracking-wider text-white/50 mb-4">
              Serviços
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-700 text-sm uppercase tracking-wider text-white/50 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-700 text-sm uppercase tracking-wider text-white/50 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="text-white/60 font-display font-500">Office Today</strong>
            {" "}· Sax Group
          </p>
          <p>
            Uma empresa do{" "}
            <strong className="text-white/60 font-display font-500">Grupo Office Total S.A.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
