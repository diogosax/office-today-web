import Link from "next/link";

const footerLinks = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Aluguel de Computadores", href: "/aluguel-de-computadores" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {year} Sax Group |{" "}
            <strong className="font-semibold text-white">Office Today</strong>
          </p>

          {/* Institutional */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Um representante do{" "}
              <strong className="font-semibold text-brand">
                Grupo Office Total S.A
              </strong>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Atuação nos Estados Unidos e no Brasil
            </p>
          </div>

          {/* Nav + Social */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <nav className="flex items-center gap-4" aria-label="Navegação rodapé">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/office-today-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Office Today no LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
