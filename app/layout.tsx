import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Office Today • Locação e Gestão de Hardware Corporativo",
  description:
    "A Office Today oferece soluções completas de locação de equipamentos de TI com gestão, manutenção e suporte especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
