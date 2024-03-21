'use client'


import { Payment } from '@/components/checkout/payment';
import { Input } from '@/components/forms';
import React, { useContext, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { formatter } from './helpers';
import { CheckoutContext } from '@/checkout-context';


export const CashForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [total, setTotal] = useState(0);
    const parsedQuantity = watch('quantity') || 0;
    const { persona } = useContext(CheckoutContext);

    const onSubmit = (data: FieldValues) => {
        setTotal(+(data.quantity));
    }
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

    return (
        <>
            {total ? (
                <div className='mt-10'>
                    <p className='block mb-5 font-bold text-center'>Donación de efectivo</p>
                    <h3 className="block mt-6 mb-10 text-xl text-right">Total:  <span className="text-2xl font-black text-baGreen">{formatter.format(parseInt(String(total)))}</span></h3>
                    <Payment email={persona!.email} publishableKey={publishableKey} total={total} />
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} >
                    <Input
                        name="quantity"
                        label="Cantidad a donar"
                        register={register}
                        type='number'
                        value=''
                        required
                        placeholder='0'
                    />
                    <span className='block mb-5 font-bold text-baGreen'>{formatter.format(parseInt(parsedQuantity))}</span>
                    <button className="block w-full px-4 py-2 ml-auto font-bold text-white transition-colors bg-baGreen hover:bg-baGreenDark">
                        Confirmar cantidad
                    </button>
                </form>
            )}
        </>
    )
}
