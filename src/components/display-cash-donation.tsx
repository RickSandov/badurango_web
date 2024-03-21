

import Link from 'next/link'
import React from 'react'
import { IconOxxo } from './icons/oxxo-icon'
import { IconVisa } from './icons/visa-icon'
import { McIcon } from './icons/mc-icon'
import { IconPaypal } from './icons/paypal-icon'

export const DisplayChashDonation = () => {
    return (
        <li className='py-5 px-8 rounded-md shadow-md w-52 gap-3 bg-white transition-all hover:scale-[1.02] duration-300 hover:shadow-xl '>
            <article className='flex flex-col justify-between h-full gap-5'>
                <h2 className='text-xl font-bold leading-tight'>
                    Donación en Efectivo
                </h2>
                <ul id='metodo_de_pago' className='flex flex-wrap items-start justify-center gap-2 mt-5 gap-y-0 md:items-center'>
                    <li className='flex items-center size-10'>
                        <IconVisa />
                    </li>
                    <li className='flex items-center size-10'>
                        <McIcon />
                    </li>
                    <li className='flex items-center size-10'>
                        <IconPaypal />
                    </li>
                    <li className='flex items-center size-10'>
                        <IconOxxo />
                    </li>
                </ul>
                <Link href={'/checkout?paymentMethod=efectivo'} className='w-full py-1 mt-5 text-sm font-bold text-center text-white transition-colors bg-baGreen hover:bg-baGreenDark'>
                    Donar aquí
                </Link>
            </article>
        </li>
    )
}
