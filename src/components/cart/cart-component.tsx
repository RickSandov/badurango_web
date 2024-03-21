'use client'

import React, { useContext } from 'react'
import { CartContext } from '../../cart/CartContext'
import { CartItem } from './cart-item'
import { CartCloseButton } from './cart-close-button'
import Link from 'next/link'

export const Cart = () => {

    const { sideMenuOpen, closeSideMenu, products } = useContext(CartContext);

    return (

        <div onClick={closeSideMenu} className={`fixed transition-all duration-500 ${sideMenuOpen ? 'flex animate-appearCartForeground' : 'opacity-0 hidden'} justify-end top-0 left-0 z-50 bg-[#00000066] w-[100vw] h-[100vh]`} >
            <nav onClick={e => e.stopPropagation()} className={`w-[500px] max-w-full h-full bg-black animate-slideInCart px-3 md:px-8 py-10 relative`}>
                <div className='bg-blue-500' >
                    <CartCloseButton />
                </div>
                <h2 className='mt-10 text-xl font-bold text-center text-white drop-shadow-sm'>Carrito de Donación</h2>
                <div className='mt-10 overflow-y-scroll'>
                    {
                        products.length ? (
                            <>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        products.map((product, i) => (
                                            <CartItem key={i} product={product} />
                                        ))
                                    }
                                </ul>
                                <Link href={`/checkout?productId=${products[0]._id}&quantity=${products[0].quantity}`} onClick={closeSideMenu} className='block w-full px-3 py-4 mx-auto mt-5 font-bold text-center text-white transition-colors shadow-md bg-baGreen hover:bg-baGreenDark hover:text-green-300'>
                                    Proceder al pago
                                </Link>
                            </>
                        ) : (
                            <p className='px-3 py-1 mx-auto text-center w-fit bg-primary'>No hay productos</p>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}
