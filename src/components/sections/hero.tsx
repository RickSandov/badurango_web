import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden w-full h-[100vh] md:h-[100vh] flex flex-col justify-center items-center">
            <Image
                alt="Cielo"
                src="/images/sky.png"
                priority
                quality={100}
                fill
                sizes="100vw"
                className="object-cover absolute inset-0 -z-50"
            />
            <Image
                alt="nubes"
                src="/images/clouds.png"
                priority
                quality={100}
                fill
                sizes="100vw"
                className="object-cover absolute inset-0 -z-40"
            />

            {/* clouds animation */}
            <div role='none' className="absolute w-[400vw] lg:w-[200vw] h-full -left-[200%] md:-left-1/2 animate-cloudsRight ease-out z-10 md:top-[10%] md:scale-110">
                <Image
                    alt="Cielo"
                    src="/images/cloudsLeft.png"
                    priority
                    fill
                    className="object-cover absolute inset-0 -z-20"
                    sizes="200vw 400vw"
                />
            </div>
            <div role='none' className="absolute w-[400vw] lg:w-[200vw] h-full animate-cloudsLeft -left-[100%] md:-left-1/2 ease-out z-10 md:top-[10%] md:scale-110">
                <Image
                    alt="Cielo"
                    src="/images/cloudsRight.png"
                    priority
                    fill
                    className="object-cover absolute inset-0 -z-20"
                    sizes="200vw 400vw"
                />
            </div>
            {/* clouds animation */}

            {/* content */}
            <div className="flex flex-col justify-center items-center gap-20 relative w-full max-w-[80vw] lg:max-w-1/2 animate-logoElevate top-[60%] md:top-[80%] z-10" role="logo">
                <Image
                    className="mx-auto max-w-full object-cover relative -z-10 drop-shadow-xl"
                    src="/logo.svg"
                    alt="Vercel Logo"
                    priority
                    width={500}
                    height={500}
                />

                <a href='/donar' className="animate-appear mx-auto bg-black text-white py-4 px-10 uppercase shadow-black shadow-md">
                    Donar Ahora
                </a>

            </div>

        </section>
    )
}
