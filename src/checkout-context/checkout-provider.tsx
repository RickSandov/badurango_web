'use client'

import { FC, PropsWithChildren, useReducer } from 'react';
import { CheckoutContext, CheckoutReducer, TPersonaForm } from './';
import { CheckoutBreadcrumbs } from '@/app/checkout/breadcrumbs';
import { api } from '@/lib/api';
import { TDonationType } from '@/types';

export interface CheckoutState {
    hasRegistered: boolean;
    persona: TPersonaForm | null;
    donationType: TDonationType | null;
    productToDonate: string | null;
}

const Checkout_INITIAL_STATE: CheckoutState = {
    hasRegistered: false,
    persona: null,
    donationType: null,
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
            const req = await api.post('/persona', persona);
            const status = req.status;
            console.log({ status });
        } catch (error) {

        }
        dispatch({ type: '[Checkout] - setPersona', payload: persona })
    }

    const setDonationType = (donationType: TDonationType) => {
        dispatch({ type: '[Checkout] - setDonationType', payload: donationType })
    }

    const setProductToDonate = (productId: string) => {
        dispatch({ type: '[Checkout] - setProductToDonate', payload: productId })
    }

    return (
        <CheckoutContext.Provider value={{
            ...state,

            // Methods
            registerDonor,
            setHasRegistered,
            setPersona,
            setDonationType,
            setProductToDonate
            // resetPersona
        }} >
            <CheckoutBreadcrumbs />
            {children}
        </CheckoutContext.Provider>
    );
};