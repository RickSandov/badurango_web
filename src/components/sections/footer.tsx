


import Image from 'next/image'
import React from 'react'
import { IconFacebook } from '../icons/facebook'
import { IconInstagram } from '../icons/instagram-icon'
import { IconLinkedin } from '../icons/linkedin-icon'
import { IconWhatsapp } from '../icons/WaIcon'
import { IconTiktok } from '../icons/tiktok-icon'

export const Footer = () => {
    return (
        <footer className='flex flex-col items-center bg-black mt-40'>
            <div className='max-w-[80%] scale-110 w-[600px] aspect-[645/489] relative -translate-y-32' >
                <Image src='/images/mom.png' alt='familia' fill className='object-cover' />
            </div>

            <div className='flex flex-wrap gap-10 justify-between items-end w-full px-12 md:px-20 relative -translate-y-10' >
                <div>
                    <p className='text-white'>Contacto</p>
                    <a className='text-primary font-bold text-xl' href="tel:">618 987 65 43</a>
                </div>
                <div>
                    <p className='text-white'>Únete a la causa</p>
                    <ul className='flex gap-5 items-center mt-2'>
                        <a href='' className='fill-primary w-10 h-10 flex justify-center items-center transition-colors hover:fill-bared'>
                            <IconFacebook />
                        </a>
                        <a href='' className='fill-primary w-10 h-10 flex justify-center items-center transition-colors hover:fill-bared'>
                            <IconWhatsapp />
                        </a>
                        <a href='' className='fill-primary w-10 h-10 flex justify-center items-center transition-colors hover:fill-bared'>
                            <IconInstagram />
                        </a>
                        <a href='' className='fill-primary w-10 h-10 flex justify-center items-center transition-colors hover:fill-bared'>
                            <IconTiktok />
                        </a>
                    </ul>
                </div>
            </div>

            <div className='w-full py-5 px-5 bg-bared flex justify-center md:justify-between items-center flex-wrap gap-4'>
                <p className='text-xs leading-none'>Copyright 2024 | BADGO todos los derechos reservados</p>
                <div className='text-xs'>
                    Política de privacidad | Términos de uso
                </div>
            </div>
        </footer>
    )
}
