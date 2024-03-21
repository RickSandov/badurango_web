

import { CartContext } from '@/cart/CartContext'
import React, { useContext } from 'react'

export const CartCloseButton = ({ className }: { className?: string }) => {

    const { closeSideMenu } = useContext(CartContext);

    return (
        <button onClick={closeSideMenu} className='absolute w-10 h-10 top-5 right-5 text-bared' >
            <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M368 368L144 144M368 144L144 368" /></svg>
        </button>
    )
}
