'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {

  const cloudsRight = useRef<HTMLImageElement | null>(null);
  const cloudsLeft = useRef<HTMLImageElement | null>(null);

  useEffect(() => {

    if (cloudsLeft.current && cloudsRight.current) {
      cloudsLeft.current.style.transform = `translateX(-${cloudsLeft.current.offsetWidth}px)`;
      cloudsRight.current.style.transform = `translateX(${cloudsRight.current.offsetWidth}px)`;
    }

    return () => {

    }
  }, [])


  return (
    <main className="">
      <section id="hero" className="relative w-full h-[70vh] flex flex-col justify-center items-center">
        <div className="w-full bg-red-500 h-full" role="logo">
          <Image
            className="max-w-[50vw] mx-auto"
            src="/logo.svg"
            alt="Vercel Logo"
            priority
            fill
          />
        </div>
        {/* <Image
          alt="Cielo"
          src="/images/sky.png"
          priority
          quality={100}
          fill
          sizes="100vw"
          className="object-cover absolute inset-0 -z-50"
        />
        <Image
          alt="Cielo"
          src="/images/clouds.png"
          priority
          quality={100}
          fill
          sizes="100vw"
          className="object-cover absolute inset-0 -z-40"
        />

        <div ref={cloudsLeft} role='none' className="absolute w-[200vw] h-full right-0 -z-40 duration-1000">
          <Image
            alt="Cielo"
            src="/images/cloudsLeft.png"
            priority
            fill
            sizes="200vw"
          />
        </div>
        <div role='none' className="absolute w-[200vw] h-full left-0 -z-40 duration-1000">
          <Image
            ref={cloudsRight}
            alt="Cielo"
            src="/images/cloudsRight.png"
            priority
            fill
            sizes="200vw"
          />
        </div> */}
      </section>
    </main>
  );
}
