import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "@/components/sections/footer";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/cart/CartProvider";

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
    <html lang="en" className={`scroll-smooth focus:scroll-auto ${montserrat.className}`}>
      <body >
        <CartProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Navbar />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
