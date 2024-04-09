'use client'

import { FC, PropsWithChildren, useReducer } from 'react';
import { CheckoutContext, CheckoutReducer, TPersonaForm } from './';
import { CheckoutBreadcrumbs } from '@/app/checkout/breadcrumbs';
import { api } from '@/lib/api';
import { TDonationType } from '@/types';
import { TProductOnCart } from '@/cart/CartProvider';

export interface CheckoutState {
    hasRegistered: boolean;
    persona: TPersonaForm | null;
    donationType: TDonationType | null;
    productIdToDonate: string | null;
    productToDonate: TProductOnCart | null,
}

const Checkout_INITIAL_STATE: CheckoutState = {
    hasRegistered: false,
    persona: null,
    donationType: null,
    productIdToDonate: null,
    productToDonate: null,
};

export const CheckoutProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(CheckoutReducer,
        Checkout_INITIAL_STATE);

    const registerDonor = () => {
        dispatch({ type: '[Checkout] - setHasRegistered', payload: true })
    }

    const setHasRegistered = (value?: boolean) => {
        dispatch({ type: '[Checkout] - setHasRegistered', payload: value || false })
    }

    const setPersona = async (persona: TPersonaForm) => {
        try {
            const req = await api.post('/persona', { ...persona, publicDonation: !persona.publicDonation });
            const status = req.status;
            console.log({ status });
        } catch (error) {

        }
        dispatch({ type: '[Checkout] - setPersona', payload: persona })
    }

    const setDonationType = (donationType: TDonationType) => {
        dispatch({ type: '[Checkout] - setDonationType', payload: donationType })
    }

    const setProductIdToDonate = (productId: string) => {
        dispatch({ type: '[Checkout] - setProductIdToDonate', payload: productId })
    }

    const setProductToDonate = (product: TProductOnCart) => {
        dispatch({ type: '[Checkout] - setProductToDonate', payload: product })
    }

    return (
        <CheckoutContext.Provider value={{
            ...state,

            // Methods
            registerDonor,
            setHasRegistered,
            setPersona,
            setDonationType,
            setProductIdToDonate,
            setProductToDonate
            // resetPersona
        }} >
            <CheckoutBreadcrumbs />
            {children}
        </CheckoutContext.Provider>
    );
};