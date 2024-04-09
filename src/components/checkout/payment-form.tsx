
'use client'

import { CartContext } from "@/cart/CartContext";
import { CheckoutContext } from "@/checkout-context";
import { api } from "@/lib/api";
import { TDonation } from "@/types";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";




export const PaymentForm = () => {

    const { donationType, productToDonate, persona } = useContext(CheckoutContext);
    const { clearCart } = useContext(CartContext);
    const { handleSubmit } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const onSubmit = async () => {

        if (!stripe || !elements) {
            return;
        }

        const toastId = toast.loading('Validando pago', {
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
            success: (res: {
                data: {
                    message: string,
                    donation: TDonation
                }
            }) => {
                const { data: { message, donation } } = res;
                toast.remove(toastId);
                clearCart();
                router.push(`/donaciones?donacion=${donation._id!}&gracias=true`);
                return message;
            },
            error: (err) => {
                console.log('Error from payment-form', { err })
                setIsLoading(false);
                return 'Error al registrar la donación'
            },
        }, {
            success: {
                duration: 8000
            },

        })

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PaymentElement />
                <button type='submit' disabled={isLoading} className="block px-4 py-2 mx-auto mt-5 font-bold text-white transition-colors bg-baGreen hover:bg-baGreenDark">
                    Realizar pago
                </button>
            </form>
        </>
    )
}
