import { ExpressCheckoutElement, PaymentElement } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";




export const PaymentForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            {/* <PaymentElement /> */}
            <ExpressCheckoutElement onConfirm={() => { }} />
        </>
    )
}
