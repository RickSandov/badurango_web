'use client'

import { CartContext } from '@/cart/CartContext'
import { CartIcon } from '@/components/icons/cart-icon'
import React, { useContext } from 'react'

export const CartButton = () => {

    const { openSideMenu } = useContext(CartContext);

    return (
        <button onClick={openSideMenu} className="transition-colors w-7 h-7 fill-primary hover:fill-baGreen" >
            <CartIcon />
        </button>
    )
}
