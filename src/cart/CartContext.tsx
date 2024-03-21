import { TProduct } from '@/types';
import { createContext } from 'react';
import { TProductOnCart } from './CartProvider';

export interface CartContextProps {
    sideMenuOpen: boolean;
    products: TProductOnCart[];

    // Methods
    openSideMenu: () => void;
    closeSideMenu: () => void;

    // Methods
    addProduct: (product: TProduct) => void;
    removeProduct: (product: TProduct) => void;
    increseProduct: (product: TProductOnCart) => void;
    decreseProduct: (product: TProductOnCart) => void;

    // Getters
    getTotalAmount: () => number;
}

export const CartContext = createContext({} as CartContextProps);