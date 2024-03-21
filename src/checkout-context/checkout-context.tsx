'use client'

import { createContext } from 'react';
import { TPersonaForm } from '.';
import { TDonationType } from '../types/index';



export interface CheckoutContextProps {
    hasRegistered: boolean;
    persona: TPersonaForm | null;
    donationType: TDonationType | null;
    productToDonate: string | null;

    // Methods
    registerDonor: () => void;
    setHasRegistered: (value?: boolean) => void;
    setDonationType: (donationType: TDonationType) => void;
    setPersona: (persona: TPersonaForm) => void;
    setProductToDonate: (productId: string) => void;
    // resetPersona: () => void;

}

export const CheckoutContext = createContext({} as CheckoutContextProps);