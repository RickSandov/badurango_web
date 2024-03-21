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
                className="absolute inset-0 object-cover -z-50"
            />
            <Image
                alt="nubes"
                src="/images/clouds.png"
                priority
                quality={100}
                fill
                sizes="100vw"
                className="absolute inset-0 object-cover -z-40"
            />

            {/* clouds animation */}
            <div role='none' className="absolute w-[400vw] lg:w-[200vw] h-full -left-[200%] md:-left-1/2 animate-cloudsRight ease-out z-10 md:top-[10%] md:scale-110">
                <Image
                    alt="Cielo"
                    src="/images/cloudsLeft.png"
                    priority
                    fill
                    className="absolute inset-0 object-cover -z-20"
                    sizes="200vw 400vw"
                />
            </div>
            <div role='none' className="absolute w-[400vw] lg:w-[200vw] h-full animate-cloudsLeft -left-[100%] md:-left-1/2 ease-out z-10 md:top-[10%] md:scale-110">
                <Image
                    alt="Cielo"
                    src="/images/cloudsRight.png"
                    priority
                    fill
                    className="absolute inset-0 object-cover -z-20"
                    sizes="200vw 400vw"
                />
            </div>
            {/* clouds animation */}

            {/* content */}
            <div className="flex flex-col justify-center items-center gap-20 relative w-full max-w-[80vw] lg:max-w-1/2 animate-logoElevate top-[60%] md:top-[80%] z-10" role="logo">
                <Image
                    className="relative object-cover max-w-full mx-auto -z-10 drop-shadow-xl"
                    src="/logo.svg"
                    alt="Vercel Logo"
                    priority
                    width={500}
                    height={500}
                />

                <a href='/donar' className="px-10 py-4 mx-auto text-white uppercase bg-black shadow-md animate-appear shadow-black">
                    Donar Ahora
                </a>
            </div>
        </section>
    )
}
