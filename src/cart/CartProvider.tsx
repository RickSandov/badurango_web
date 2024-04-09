'use client'

import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { cartReducer } from './cartReducer.ts';
import { TProduct } from '../types/index';
import { CartContext } from './CartContext.tsx';
import { Cart } from '../components/cart/cart-component.tsx';
import { getFromLocalStorage } from '@/app/utils/local-storage.ts';


export type TProductOnCart = TProduct & { quantity: number }

export interface CartState {
    sideMenuOpen: boolean;
    products: TProductOnCart[],
}

const Cart_INITIAL_STATE: CartState = {
    sideMenuOpen: false,
    products: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer,
        Cart_INITIAL_STATE);

    useEffect(() => {
        const products = getFromLocalStorage("products");
        if (products) {
            dispatch({ type: '[Cart] - Load Initial Data', payload: JSON.parse(products) })
        }
    }, [])



    const getTotalAmount = () => {
        return state.products.reduce((prev, current) => prev + current.price, 0);
    }

    const addProduct = (product: TProduct) => {
        // dispatch({ type: '[Cart] - Add Product', payload: product })
        const productOnCart = state.products.find(p => p._id === product._id);
        if (productOnCart) {
            return dispatch({ type: '[Cart] - Product plus 1', payload: productOnCart });
        }
        return dispatch({ type: '[Cart] - Add Product', payload: product });
    }

    return (
        <CartContext.Provider value={{
            ...state,


            // Methods
            openSideMenu: () => dispatch({ type: '[Cart] - Open Side Menu' }),
            closeSideMenu: () => dispatch({ type: '[Cart] - Close Side Menu' }),

            // Actions
            addProduct,
            removeProduct: (product: TProduct) => dispatch({ type: '[Cart] - Remove Product', payload: product }),

            // Getters
            getTotalAmount,

            increseProduct: (product: TProductOnCart) => dispatch({ type: '[Cart] - Product plus 1', payload: product }),
            decreseProduct: (product: TProductOnCart) => dispatch({ type: '[Cart] - Product minus 1', payload: product }),

            clearCart: () => dispatch({ type: '[Cart] - Clear Cart' }),

        }} >
            {children}
            <Cart />
        </CartContext.Provider>
    );
};