import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ContabilApp — Holerites e recibos de férias automáticos para contabilidades",
  description:
    "Desmembre o PDF da folha automaticamente, entregue cada holerite ao funcionário no celular e colete a assinatura digital com validade jurídica. Rastreabilidade em tempo real e total conformidade com a LGPD.",
  keywords: [
    "holerite automático",
    "contabilidade",
    "recibo de férias",
    "assinatura digital",
    "LGPD",
    "folha de pagamento",
  ],
  openGraph: {
    title: "ContabilApp — Automação de holerites para contabilidades",
    description:
      "Do upload à assinatura: desmembre o PDF da folha, entregue no celular do funcionário e acompanhe leitura e assinatura em tempo real.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
