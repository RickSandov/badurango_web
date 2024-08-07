


import Image from 'next/image'
import React from 'react'



const items = [
    {
        title: 'Misión',
        text: () => (
            <p className='drop-shadow-sm p-4'><strong>Rescatar</strong> y <strong>distribuir</strong> alimentos a través del desarrollo y fortalecimiento de la red nacional de <strong>Bancos de Alimentos</strong> involucrando a la sociedad Duranguense para contribuir a un México <strong>sustentable y sin hambre</strong>.</p>
        )
    },
    {
        title: 'Visión',
        text: () => (
            <p className='drop-shadow-sm p-4'>Ser la institución con el modelo más efectivo para <strong>acabar con el hambre</strong> y el <strong>desperdicio</strong> del alimentos en México en el 2030.</p>
        )
    },
    {
        title: 'Valores',
        text: () => (
            <p className='drop-shadow-sm p-4'><strong>Ayudar</strong> a quien lo necesita, actuando con  <strong>integridad, respeto, dignidad, igualdad y transparencia</strong> en todos los procesos que implica la operación.</p>
        )
    },
]

export const Mision = () => {
    return (
        <section id="hero" className="relative w-full flex flex-col overflow-visible justify-center items-center py-10 md:py-20 md:pb-40">
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
                src="/images/sm-clouds.png"
                priority
                quality={100}
                fill
                sizes="100vw"
                className="object-cover absolute inset-0 -z-40"
            />

            <div className='my-10 px-8 w-full flex items-center justify-center py-10'>
                <ul className='flex flex-col gap-8 w-full items-start justify-center md:flex-row md:flex-wrap md:gap-32 ' >
                    {items.map(({ title, text }) => (
                        <li key={title} className='flex flex-col items-center text-center md:text-left md:w-[300px] bg-white'>
                            <h3 className='text-center w-full text-3xl font-bold px-3 py-2 text-primary bg-black shadow-sm'>{title}</h3>
                            <div>
                                {text()}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='absolute left-1/2 -translate-x-1/2 translate-y-20 bottom-0'>
                <div className='md:w-[400px] w-[200px] aspect-[373/313] relative'>
                    <Image src='/images/boy.png' alt='niño' fill className='object-cover relative drop-shadow-md shadow-slate-800' />
                </div>
            </div>
        </section>
    )
}
