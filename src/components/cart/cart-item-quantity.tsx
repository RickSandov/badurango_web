'use client'
import { CartContext } from '@/cart/CartContext'
import { TProductOnCart } from '@/cart/CartProvider'
import React, { useContext, useMemo } from 'react'

export const CartItemQuantity = ({ product }: { product: TProductOnCart }) => {

  const { decreseProduct, increseProduct } = useContext(CartContext)

  const quantity = useMemo(() => {
    return product.quantity
  }, [product.quantity])

  return (
    <div className='flex items-center justify-between gap-2'>
      <button onClick={() => decreseProduct(product)} className='w-5 h-5 font-bold leading-none text-black bg-primary'>
        -
      </button>
      <p className='font-black text-black'>{quantity}</p>
      <button onClick={() => increseProduct(product)} className='w-5 h-5 font-bold leading-none text-black bg-primary'>
        +
      </button>
    </div>
  )
}
