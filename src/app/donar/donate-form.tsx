'use client'


import { Form, Input } from '@/components/forms'
import { api } from '@/lib/api';
import { contactTypeArray } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const DonateForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const { reset, handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log({ data })
        setIsLoading(true);
        const req = api.post('/contact', data);
        toast.promise(req, {
            loading: 'Enviando...',
            success: (res: any) => {
                console.log({ res });
                reset();
                setIsLoading(false);
                return res.data;
            },
            error: () => {
                setIsLoading(false);
                return 'Error al enviar el formulario'
            }
        }, {
            success: {
                duration: 5000
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className='relative w-[500px] bg-white max-w-full mx-auto mt-5 px-10' >

            <div className='hidden md:block absolute top-1/5 -right-1/2 items-center'>
                <Image src='/images/mandado.png' alt='Caridad' className='object-contain' width={300} height={400} />
            </div>

            <h2 className='mb-5 text-xl font-bold text-center text-primary'>Formulario de contacto</h2>
            <div className='flex flex-col gap-2 my-4 px-5'>
                <Input register={register} label='Nombre completo' name='name' required />
                <Input register={register} label='Email' name='email' type='email' required />
                <Input register={register} label='Número de contacto' name='phone' required type='number' maxLength={10} />
                <div className='flex flex-col gap-1'>
                    <label htmlFor='type' className='relative block text-sm font-bold text-gray-700'>Tipo de donación</label>
                    <select id='type' className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow' {...register("type", { required: true, value: '' })}>
                        <option value=''></option>
                        {/* <option value={''}></option> */}
                        {contactTypeArray.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="message" className='relative block text-sm font-bold text-gray-700'>Mensaje</label>
                    <textarea {...register('message', { required: true, value: '' })} className='h-32 px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow resize-none' name="message" id="message">

                    </textarea>
                </div>
                <button disabled={isLoading} className="block px-4 py-2 ml-auto font-bold text-white transition-colors bg-baGreen hover:bg-baGreenDark">
                    Enviar
                </button>
            </div>
        </Form>
    )
}
