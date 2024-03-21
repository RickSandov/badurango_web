


import { TProductOnCart } from '@/cart/CartProvider'
import Image from 'next/image'
import React from 'react'

export const CheckoutProduct = ({ product }: { product: TProductOnCart }) => {
    return (
        <li className='relative flex items-center justify-between gap-3 px-2 py-5 bg-white rounded-md shadow-md'>
            <Image src={product.image} alt={'cemento'} width={100} height={100} className='object-contain' id='caca' />
            <div className='flex flex-col flex-grow' >
                <h3 className='leading-tight'>{product.title}<p className='block font-bold'>{product.description}</p></h3>
                <span className='block mb-5 text-sm font-bold w-fit text-bared'>{product.quantity} unidades</span>
                <div className='flex items-center justify-between '>
                    <div className='flex items-end gap-2'>
                        <p className='text-xl font-black text-baGreen'>${product.price}<span className='text-sm text-black'>c/u</span></p>
                    </div>
                </div>
            </div>
        </li>
    )
}
