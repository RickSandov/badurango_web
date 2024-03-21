
'use client'

import React, { useContext, useEffect } from 'react'
import { PersonaForm } from './persona-form'
import { CheckoutProduct } from './checkout-product'
import { TProductOnCart } from '@/cart/CartProvider'
import { formatter } from './helpers'
import { Payment } from '@/components/checkout/payment'
import { CheckoutContext } from '@/checkout-context'
import { AnimatePresence, motion } from 'framer-motion'
import { donationType } from '@/types'

export const ProductDonation = ({ product, total }: { product: TProductOnCart, total: number }) => {

    const { hasRegistered, setProductToDonate, persona } = useContext(CheckoutContext);
    const { _id, title, description, image, price, quantity } = product;


    useEffect(() => {
        setProductToDonate(_id as string);
    }, [])

    return (
        <div className="md:w-[500px] max-w-full mx-auto">
            <AnimatePresence>
                {hasRegistered ? (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                    >
                        <p className='block mb-5 font-bold text-center'>Donación de {title}</p>
                        <ul id="productos" className="md:w-[300px] max-w-full flex flex-col w-full mx-auto">
                            <CheckoutProduct product={{
                                _id,
                                title,
                                description,
                                image,
                                price,
                                quantity: +quantity
                            }} />
                        </ul>
                        <h3 className="block mt-6 mb-10 text-xl text-right">Total:  <span className="text-2xl font-black text-baGreen">{formatter.format(parseInt(String(total)))}</span></h3>
                        <Payment email={persona!.email} productId={_id as string} quantity={+quantity} publishableKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''} />
                    </motion.div>
                ) : (
                    <PersonaForm />
                )}
            </AnimatePresence>
        </div>
    )
}
