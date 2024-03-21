'use client'

import { CartContext } from '@/cart/CartContext'
import { TProductOnCart } from '@/cart/CartProvider'
import { TProduct } from '@/types'
import Image from 'next/image'
import React, { useContext, useMemo } from 'react'
import { CartItemQuantity } from './cart/cart-item-quantity'

export const DisplayProduct = ({ product }: { product: TProduct }) => {
    const { openSideMenu, addProduct, products } = useContext(CartContext);
    const handleProductButton = () => {
        if (onCartProduct) {
            return openSideMenu();
        }
        addProduct(product);
    }

    const onCartProduct = products.find(p => p._id === product._id);

    return (
        <li className='py-5 px-8 rounded-md shadow-md w-52 flex flex-col justify-center items-center gap-3 bg-white transition-all hover:scale-[1.02] duration-300 hover:shadow-xl'>
            <article className=''>
                <Image src={product.image} alt={'cemento'} width={150} height={150} className='object-contain' />
                <h3 className='w-full leading-tight text-left text-black'>{product.title} <span className='font-bold'>{product.description}</span></h3>
                {
                    onCartProduct ? (
                        <div className='flex items-center justify-between w-full mt-3'>
                            <CartItemQuantity product={onCartProduct} />
                            <p className='font-black text-bared'>${product.price}</p>
                        </div>
                    ) : (
                        <div className='flex items-center justify-end w-full mt-3'>
                            <p className='font-black text-bared'>${product.price}</p>
                        </div>
                    )
                }
                <button onClick={handleProductButton} className='w-full py-1 mt-5 text-sm font-bold text-center text-white transition-colors bg-baGreen hover:bg-baGreenDark'>
                    {
                        onCartProduct ? 'En carrito' : 'Añadir al carrito'
                    }
                </button>
            </article>
        </li>
    )
}
