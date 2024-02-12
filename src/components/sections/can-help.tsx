


import Image from 'next/image'
import React from 'react'



const items = [
    {
        image: '/images/voluntario.png',
        title: 'Voluntariado',
        text: 'Cada granito cuenta, cada mano es un mundo de ayuda.'
    },
    {
        image: '/images/donacion-de-alimentos.png',
        title: 'Alimento',
        text: 'Compartir alimentos es alimentar corazones y nutrir esperanzas.'
    },
    {
        image: '/images/donacion-efectivo.png',
        title: 'Efectivo',
        text: 'Tu aportación es invaluable para nosotros.'
    },
    {
        image: '/images/donar.png',
        title: 'Tus servicios',
        text: 'Haz la diferencia con tus servicios y asesorías'
    },
]
export const CanHelp = () => {
    return (
        <section id='ayuda' className='bg-white pt-32 pb-40'>
            <h2 className='text-center text-3xl font-black text-black'>¿Cómo puedes <strong className='text-primary' >ayudar</strong>?</h2>

            <ul className='flex flex-col md:flex-row gap-10 text-center justify-center mt-10'>
                {items.map(({ title, image, text }) => (
                    <li key={title} className='flex flex-col items-center justify-center gap-3'>
                        <Image src={image} alt={title} width={70} height={70} />
                        <h3 className='text-primary font-black text-xl'>{title}</h3>
                        <p className='text-black max-w-[250px]'>{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
