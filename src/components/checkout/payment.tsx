'use client'
import { Elements } from '@stripe/react-stripe-js';
import { useStripeConfig } from './payment.hooks';
import { PaymentForm } from './payment-form';


export const Payment = ({ publishableKey, productId, quantity, total, email }: { publishableKey: string, productId?: string, quantity?: number, total?: number, email: string }) => {

    const { stripePromise, clientSecret, error, isLoading } = useStripeConfig({ publishableKey, productId, quantity, total, email });

    return (
        <div className='mt-5'>
            <h1 className="mb-5 text-2xl font-bold text-center text-black">Pago de Donación</h1>
            {isLoading && (
                <p className='text-center text-baGreen'>Cargando componente de pago...</p>
            )}
            {!error && !isLoading && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    )
}
