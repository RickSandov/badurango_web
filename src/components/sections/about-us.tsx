


import Image from 'next/image'
import React from 'react'



const items = [
    {
        image: '/images/mano-amiga.png',
        text: () => (
            <p className='z-20 w-56'><strong>1</strong> de cada <strong>4</strong> personas sufre de <strong>inseguridad alimentaria</strong> en Durango.</p>
        )
    },
    {
        image: '/images/caridad.png',
        text: () => (
            <p className='z-20 w-56'><strong>Rescatamos</strong> y <strong>distribuimos alimentos</strong> a lo más necesitados.</p>
        )
    },
    {
        image: '/images/entrega-de-comida.png',
        text: () => (
            <p className='z-20 w-56'>Hay <strong>suficiente</strong> comida <strong>para todos</strong>, el reto es distribuirla adecuadamente.</p>
        )
    },
    {
        image: '/images/comunidad.png',
        text: () => (
            <p className='z-20 w-56'>Una sociedad <strong>justa y equitativa </strong>es posible con la ayuda de todos. <strong>¡Únete!</strong></p>
        )
    },

]

export const AboutUs = () => {
    return (
        <section id='nosotros' className='relative shadow-slate-800'>
            <div className='absolute right-0 z-20 hidden -bottom-12 md:block' >
            </div>
            <div className='flex px-12 py-20 md:px-20 bg-black'>
                <ul className='flex flex-col gap-8 text-white md:flex-row md:flex-wrap md:w-[60vw] lg:w-[70vw]'>
                    {items.map(({ image, text }) => (
                        <li key={image}>
                            <article className='flex items-center text-left '>
                                <Image className='self-start' src={image} alt={image} width={40} height={40} />
                                <span className='block w-2 h-24 my-3 ml-3 bg-primary md:my-0 mx-3'></span>
                                {text()}
                            </article>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='relative px-12 py-20 bg-primary md:px-20 mt-10' >

                <svg className='absolute -top-[85px] left-0 z-5' preserveAspectRatio="none" width="100%" height="88" viewBox="0 0 1280 88" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0 28L30.6017 31.7C61.2033 35.3 122.407 42.7 183.325 40C244.386 37.3 305.02 24.7 366.081 22.2C427 19.7 488.203 27.3 549.122 27.7C610.183 28 670.817 21 731.878 21.3C792.797 21.7 854 29.3 914.919 34.5C975.98 39.7 1036.61 42.3 1097.67 36.2C1158.59 30 1219.8 15 1250.4 7.5L1281 0V88H1250.4C1219.8 88 1158.59 88 1097.67 88C1036.61 88 975.98 88 914.919 88C854 88 792.797 88 731.878 88C670.817 88 610.183 88 549.122 88C488.203 88 427 88 366.081 88C305.02 88 244.386 88 183.325 88C122.407 88 61.2033 88 30.6017 88H0V28Z" fill="#FCB71E" />
                </svg>

                <svg className='absolute right-0 -bottom-[46px] z-5' preserveAspectRatio="none" height="442" viewBox="0 0 525 442" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M197.569 239C174.274 329.8 56.8167 380 0 395C167 397.333 441.775 377.2 524.975 442V0C425.546 41.8333 220.863 148.2 197.569 239Z" fill="#FCB71E" />
                </svg>


                <article className='relative z-10' >
                    <h3 className='text-3xl font-black text-white bg-bared p-4 inline z-11'>¿Quienes somos?</h3>
                    <p className='mt-4 text-black md:max-w-[60%] bg-white p-2'>Somos una <strong>organización civil</strong> sin fines de lucro con la misión de <strong>abatir la pobreza alimentaria</strong>, por medio del rescate de todo aquel alimento que no sea comercializable, evitando así su desperdicio y canalizándolo a las familias que se encuentran en inseguridad alimentaria.</p>
                    <div className='absolute hidden -right-16 bottom-48 lg:block md:-right-8 lg:bottom-24 ' >
                        <div className='w-[400px] z-10 aspect-[430/475] relative'>
                            <Image src='/images/girl.png' alt='niña' fill className='relative object-cover' />
                        </div>
                    </div>
                </article>
            </div >
        </section >
    )
}