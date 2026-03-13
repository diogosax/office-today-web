import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Office Today • Locação e Gestão de Hardware Corporativo",
  description:
    "A Office Today oferece soluções completas de locação de equipamentos de TI com gestão, manutenção e suporte especializado. Conheça o modelo HaaS e equipe a sua empresa com tecnologia de ponta de forma econômica, flexível e conveniente.",
  openGraph: {
    type: "website",
    url: "https://www.office-today.com",
    title: "Office Today • Locação e Gestão de Hardware Corporativo",
    description:
      "A Office Today oferece soluções completas de locação de equipamentos de TI com gestão, manutenção e suporte especializado.",
  },
  twitter: {
    card: "summary",
    title: "Office Today • Locação e Gestão de Hardware Corporativo",
    description:
      "A Office Today oferece soluções completas de locação de equipamentos de TI com gestão, manutenção e suporte especializado.",
  },
  alternates: {
    canonical: "https://www.office-today.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Montserrat — display/headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Poppins — body text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
