'use client'
import { api } from '@/lib/api';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react'
import { useStripeConfig } from './payment.hooks';
import { PaymentForm } from './payment-form';


export const Payment = ({ publishableKey }: { publishableKey: string }) => {

    const { stripePromise, clientSecret, error, isLoading } = useStripeConfig(publishableKey);

    return (
        <div>
            <h1>Payment</h1>
            {!error && !isLoading && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    )
}
