


import type { Metadata } from "next";
import { CheckoutProvider } from "@/checkout-context";
import Image from "next/image";
import { Logo } from "../logo";

export const metadata: Metadata = {
    title: "Banco de Alimentos de Durango",
    description: "Pasarela de pago para donación. Con tu ayuda, haremos posible este proyecto.",
};

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-full py-10 overflow-visible h-[250px] max-h-[40vh]">
                <Image
                    alt="Cielo"
                    src="/images/sky.png"
                    priority
                    quality={100}
                    fill
                    sizes="100vw"
                    className="absolute inset-0 object-cover -z-50"
                />
                <Image
                    alt="nubes"
                    src="/images/sm-clouds.png"
                    priority
                    quality={100}
                    fill
                    sizes="100vw"
                    className="absolute inset-0 object-cover -z-40"
                />
                <div className="w-[200px] absolute bottom-1/2 translate-y-1/2 max-w-[90%] fill">
                    <Logo className="fill-white" />
                </div>
            </div>
            <CheckoutProvider>
                <div className="px-5 py-10 text-black md:px-8">
                    <h1 className="mb-10 text-2xl font-bold text-center text-black">Proceso de Donación</h1>
                    {children}
                </div>
            </CheckoutProvider>
        </>
    );
}
