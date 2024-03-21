
'use client'

import { CheckoutContext } from "@/checkout-context";
import { api } from "@/lib/api";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";




export const PaymentForm = () => {

    const { donationType, productToDonate, persona } = useContext(CheckoutContext);
    const { handleSubmit } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {

        if (!stripe || !elements) {
            return;
        }

        toast.loading('Validando pago', {
            duration: 5000
        })
        setIsLoading(true);
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                receipt_email: persona!.email,
            },
            redirect: "if_required",
        })

        if (error) {
            toast.error(error.message || 'Error al procesar el pago');
            return
        }

        const data = {
            paymentId: paymentIntent.id,
            type: donationType,
            productId: productToDonate,
            rfc: persona?.rfc,
            amount: paymentIntent.amount / 100,
            message: persona?.message,
            paymentStatus: paymentIntent.status
        }

        const req = api.post('/donation', data);
        toast.promise(req, {
            loading: 'Guardando donación',
            success: (res: any) => {
                setIsLoading(false);
                return res.data;
            },
            error: () => {
                setIsLoading(false);
                return 'Error al registrar la donación'
            }
        }, {
            success: {
                duration: 8000
            }
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PaymentElement />
                <button type='submit' disabled={isLoading} className="block mt-5 px-4 py-2 font-bold text-white mx-auto transition-colors bg-baGreen hover:bg-baGreenDark">
                    Realizar pago
                </button>
            </form>
        </>
    )
}
