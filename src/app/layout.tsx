import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banco de Alimentos de Durango",
  description: "Banco de Alimentos de Durango. Con tu ayuda, haremos posible este proyecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
