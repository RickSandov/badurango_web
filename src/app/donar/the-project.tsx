import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const TheProject = () => {
    return (
        <section className='flex flex-col md:flex-row'>
            <div className="bg-gradient-to-tl to-baGreen from-[#007726] md:w-1/2 py-20 px-10">
                <p className='block mb-4 text-white'>Con tu ayuda, contruiremos el <strong>Banco de Alimentos</strong> de Durango</p>
                <Link href='./#' className='relative font-bold text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-primary' >
                    Leer más
                </Link>
            </div>
            <div className='relative md:w-1/2 h-[225px]' >
                <Image src='/images/voluntarias.png' alt='voluntarias' fill className='object-cover' />
            </div>
        </section>
    )
}
