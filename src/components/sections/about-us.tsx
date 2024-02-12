


import Image from 'next/image'
import React from 'react'



const items = [
    {
        image: '/images/mano-amiga.png',
        text: () => (
            <p className='md:w-56 z-20 text-white'><strong>1</strong> de cada <strong>4</strong> personas sufre de <strong>inseguridad alimentaria</strong> en Durango.</p>
        )
    },
    {
        image: '/images/caridad.png',
        text: () => (
            <p className='md:w-56 z-20 text-white'><strong>Rescatamos</strong> y <strong>distribuimos alimentos</strong> a lo más necesitados.</p>
        )
    },
    {
        image: '/images/entrega-de-comida.png',
        text: () => (
            <p className='md:w-56 z-20 text-white'>Hay <strong>suficiente</strong> comida <strong>para todos</strong>, el reto es distribuirla adecuadamente.</p>
        )
    },
    {
        image: '/images/comunidad.png',
        text: () => (
            <p className='md:w-56 z-20 text-white'>Una sociedad <strong>justa y equitativa </strong>es posible con la ayuda de todos. <strong>¡Únete!</strong></p>
        )
    },

]

export const AboutUs = () => {
    return (
        <section id='nosotros' className='relative'>
            <div className='absolute z-20 right-0 -bottom-12 md:block hidden' >
                <RedVector />
            </div>
            <div className='bg-primary py-20 px-12 md:px-20 relative' >
                <h3 className='text-3xl font-black text-black relative after:absolute after:-bottom-2 after:left-0 after:w-24 after:h-2 after:bg-bared'>¿Quienes somos?</h3>
                <p className='mt-5 text-black md:max-w-[60%]'>Somos una <strong>oraganización civil</strong> sin fines de lucro con la misión de <strong>abatir la pobreza alimentaria</strong>, por medio del rescate de todo aquel alimento que no sea comercializable, evitando así su desperdicio y canalizándolo a las familias que se encuentran en inseguridad alimentaria.</p>
                <div className='absolute right-28 -bottom-32 md:block hidden'>
                    <div className='w-[400px] z-30 aspect-[430/475] relative'>
                        <Image src='/images/girl.png' alt='niña' fill className='object-cover relative translate-y-20' />
                    </div>
                </div>
            </div>
            <div className='py-20 px-12 md:px-20 flex bg-black'>
                <ul className='flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-14 md:w-[60vw]'>
                    {items.map(({ image, text }) => (
                        <li key={image} className='flex flex-col items-center text-center md:text-left md:flex-row'>
                            <Image src={image} alt={image} width={75} height={75} />
                            <span className='block w-24 h-2 md:w-2 md:h-20 bg-primary my-3 md:my-0 md:mx-3' ></span>
                            {text()}
                        </li>
                    ))}
                </ul>
            </div>
        </section >
    )
}



function RedVector() {

    return (
        <svg width="525" height="442" viewBox="0 0 525 442" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M197.569 239C174.274 329.8 56.8167 380 0 395C167 397.333 441.775 377.2 524.975 442V0C425.546 41.8333 220.863 148.2 197.569 239Z" fill="#CE0F2D" />
        </svg>

    )
}