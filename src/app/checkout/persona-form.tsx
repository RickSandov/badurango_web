

'use client'


import { Form, Input } from '@/components/forms'
import React, { useContext, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckoutContext, TPersonaForm } from '@/checkout-context';
import { donorDisplayArray, donorTypeArray } from '@/types';
import { CheckoutProduct } from './checkout-product';

export const PersonaForm = () => {

    const { setPersona, persona: statePersona, productToDonate } = useContext(CheckoutContext);
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, watch, register } = useForm();

    const onSubmit = (persona: FieldValues) => {
        setIsLoading(true);
        setPersona(persona as TPersonaForm);
    }

    const isAnonymous = watch('isAnonymous');

    const persona: TPersonaForm = statePersona || {
        name: '',
        email: '',
        phone: '',
        rfc: '',
        donorType: 'persona física',
        displayType: 'particular',
        isAnonymous: false,
        address: '',
        city: '',
        state: '',
        postalCode: '',
        publicName: '',
        message: '',
    }

    const { name, email, phone, rfc, donorType, displayType, isAnonymous: _isAnonymous, address, city, state, postalCode, publicName, message } = persona;

    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
        >
            {productToDonate && (
                <div className='mb-10'>
                    <ul id="productos" className="md:w-[300px] max-w-full flex flex-col w-full mx-auto">
                        <CheckoutProduct product={{
                            _id: productToDonate._id,
                            title: productToDonate.title,
                            description: productToDonate.description,
                            image: productToDonate.image,
                            price: productToDonate.price,
                            quantity: +productToDonate.quantity
                        }} />
                    </ul>
                </div>
            )}
            <Form onSubmit={handleSubmit(onSubmit)} className='mb-12' >
                <h2 className='mb-5 text-xl font-bold text-center text-baGreen'>Registro de Donante</h2>
                <div className='flex flex-col gap-2 my-4 px-5'>
                    <Input register={register} value={name} label='Nombre o Razón Social' name='name' required />

                    <Input register={register} value={email} label='Email' name='email' type='email' required />

                    <Input register={register} value={phone} label='Número de contacto' name='phone' type='tel' required />

                    <Input register={register} value={rfc} label='RFC' name='rfc' required />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='donorType' className='relative block text-sm font-bold text-gray-700'>Tipo de persona fiscal</label>
                        <select defaultValue={donorType} id='donorType' className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow' {...register("donorType", { required: true, value: '' })}>
                            <option value=''></option>
                            {/* <option value={''}></option> */}
                            {donorTypeArray.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <h2 className='my-5 text-xl font-bold text-center text-baGreen'>Dirección</h2>

                    <Input register={register} value={address} label='Dirección' name='address' required />

                    <Input register={register} value={state} label='Estado' name='state' required />

                    <Input register={register} value={city} label='Municipio' name='city' />

                    <Input register={register} value={postalCode} label='Código postal' name='postalCode' type='tel' required />

                    <h2 className='my-5 text-xl font-bold text-center text-baGreen'>Detalles de donación</h2>

                    <div className='flex flex-wrap gap-1 mb-5'>
                        <div className="flex items-center">
                            <input id="anonima" type="checkbox"
                                {...register('isAnonymous', { value: _isAnonymous })} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="anonima" className="ms-2 text-sm font-bold text-gray-700">Donación Anónima</label>
                        </div>
                        <span className='text-sm block'>Al marcar esta casilla, la donación no aparecerá en la lista pública de donantes</span>
                    </div>

                    <div className="mb-3">
                        <AnimatePresence >
                            {!isAnonymous ?
                                (
                                    <motion.div initial={{
                                        opacity: 0,
                                        height: 0
                                    }} animate={{
                                        opacity: 1,
                                        height: 'auto'
                                    }}
                                        exit={{
                                            opacity: 0,
                                            height: 0
                                        }}
                                        className='flex flex-col gap-1'>
                                        <Input register={register} value={publicName} label='Nombre para publicar' name='publicName' required />
                                        <div className='flex flex-col gap-1'>
                                            <label htmlFor='displayType' className='relative block text-sm font-bold text-gray-700'>Donación hecha por</label>
                                            <select defaultValue={displayType} id='displayType' className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow' {...register("displayType", { required: true, value: '' })}>
                                                <option value=''></option>
                                                {/* <option value={''}></option> */}
                                                {donorDisplayArray.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </motion.div>
                                )
                                : null}
                        </AnimatePresence>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="message" className='relative block text-sm font-bold text-gray-700'>Mensaje</label>
                        <textarea {...register('message', { required: false, value: '' })} className='h-32 px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow resize-none' name="message" id="message">

                        </textarea>
                    </div>
                    <button type='submit' disabled={isLoading} className="block px-4 py-2 ml-auto font-bold text-white transition-colors bg-baGreen hover:bg-baGreenDark">
                        Continuar
                    </button>
                </div>
            </Form>
        </motion.div >
    )
}
