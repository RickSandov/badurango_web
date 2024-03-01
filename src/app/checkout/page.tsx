import { Payment } from "@/components/checkout/payment"




export default function Checkout() {
    return (
        <div className="pt-36 px-5 md:px-8 text-black">
            <Payment publishableKey={process.env.STRIPE_PUBLISHABLE_KEY || ''} />
        </div>
    )
}