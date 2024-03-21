'use client'

import { CartContext } from '@/cart/CartContext'
import { TProductOnCart } from '@/cart/CartProvider'
import Image from 'next/image'
import React, { useContext } from 'react'
import { CartItemQuantity } from './cart-item-quantity'

export const CartItem = ({ product }: { product: TProductOnCart }) => {
    const { removeProduct } = useContext(CartContext);
    return (
        <li className='relative flex items-center justify-between gap-3 px-2 py-10 bg-white rounded-md shadow-md md:py-5' >
            <button onClick={() => {
                removeProduct(product);
            }} className='absolute w-6 h-6 top-2 left-2 text-bared' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M368 368L144 144M368 144L144 368" /></svg>
            </button>
            <Image src={product.image} alt={'cemento'} width={100} height={100} className='object-contain' id='caca' />
            <div className='flex flex-col flex-grow' >
                <h3 className='leading-tight'>{product.title}<p className='block font-bold'>{product.description}</p></h3>
                <div className='flex items-center justify-between '>
                    <CartItemQuantity product={product} />
                    <div className='flex items-end gap-2'>
                        <span className=''>total</span>
                        <p className='text-xl font-black text-baGreen'>${(product.price * product.quantity).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}
