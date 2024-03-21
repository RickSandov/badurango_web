'use client'
import { useId } from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';

type InputProps = {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    value?: string;
    min?: number;
    max?: number;
    maxLength?: number;
    minLength?: number;
    description?: string;
    className?: string;
    register: UseFormRegister<any>;
    error?: string;
}

export const Input = ({
    name,
    label,
    placeholder,
    type = 'text',
    required,
    value,
    min,
    max,
    maxLength,
    minLength,
    description,
    className,
    register,
    error
}: InputProps) => {

    const id = useId();

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            <label htmlFor={id} className='relative block text-sm font-bold text-gray-700'>{label} {required && <span className='text-red-500'>*</span>}</label>
            <input
                className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow'
                type={type}
                placeholder={placeholder}
                id={id}
                {...register(name, {
                    required,
                    value,
                    min,
                    max,
                    maxLength,
                    minLength,
                })} />
            {description && <span>{description}</span>}
            {/* {errors[name] && <span>Revisa el campo</span>} */}
        </div>
    )
}