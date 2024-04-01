'use client'

import { createContext } from 'react';
import { TPersonaForm } from '.';
import { TDonationType } from '../types/index';
import { TProductOnCart } from '@/cart/CartProvider';



export interface CheckoutContextProps {
    hasRegistered: boolean;
    persona: TPersonaForm | null;
    donationType: TDonationType | null;
    productToDonate: TProductOnCart | null;
    productIdToDonate: string | null;

    // Methods
    registerDonor: () => void;
    setHasRegistered: (value?: boolean) => void;
    setDonationType: (donationType: TDonationType) => void;
    setPersona: (persona: TPersonaForm) => void;
    setProductIdToDonate: (productId: string) => void;
    setProductToDonate: (product: TProductOnCart) => void;
    // resetPersona: () => void;

}

export const CheckoutContext = createContext({} as CheckoutContextProps);