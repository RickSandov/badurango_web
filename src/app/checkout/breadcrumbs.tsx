import { CheckoutContext } from '@/checkout-context'
import React, { useContext } from 'react'
import Link from 'next/link';

export const CheckoutBreadcrumbs = () => {

    const { hasRegistered, setHasRegistered } = useContext(CheckoutContext);

    const className = `text-slate-500 hover:text-primary cursor-pointer transition-colors flex items-start gap-1 -mt-[1px]`;

    return (
        <div className='md:w-[600px] max-w-full mx-auto pt-10 px-5 flex gap-1 items-start'>
            <strong className='font-bold'>{'<'}</strong>
            {
                hasRegistered ? (
                    <span onClick={() => setHasRegistered(false)} className={className}>
                        regresar a formulario de registro
                    </span>
                ) : (
                    <Link href='/donar' className={className}>
                        volver a página principal
                    </Link>
                )
            }
        </div>
    )
}
