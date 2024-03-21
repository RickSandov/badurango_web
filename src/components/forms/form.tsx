'use client'

import { PropsWithChildren } from "react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";

interface FormProps extends PropsWithChildren {
    onSubmit: () => void;
    className?: string;
}

export const Form = ({ onSubmit, children, className }: FormProps) => {
    return (
        <form onSubmit={onSubmit} className={`text-black bg-white px-5 py-10 rounded-lg shadow-md ${className}`} >
            {children}
        </form>
    );
};