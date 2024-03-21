import { TProduct } from "@/types";
import { CartState, TProductOnCart } from "./CartProvider";
import { Types } from "mongoose";
import { saveToLocalStorage } from "@/app/utils/local-storage";

type CartActionType =
  | { type: "[Cart] - Open Side Menu" }
  | { type: "[Cart] - Close Side Menu" }
  | { type: "[Cart] - Add Product"; payload: TProduct }
  | { type: "[Cart] - Remove Product"; payload: TProduct }
  | {
      type: "[Cart] - Product plus 1";
      payload: TProductOnCart;
    }
  | {
      type: "[Cart] - Product minus 1";
      payload: TProductOnCart;
    }
  | {
      type: "[Cart] - Load Initial Data";
      payload: TProductOnCart[];
    };

function reducerReturn(state: CartState) {
  const products = state.products;
  saveToLocalStorage("products", products);
  return { ...state };
}

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - Add Product": {
      const newProductOnCart: TProductOnCart = {
        _id: action.payload._id,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
        price: action.payload.price,
        quantity: 1,
      };
      return reducerReturn({
        ...state,
        products: [...state.products, newProductOnCart],
      });
    }

    case "[Cart] - Product plus 1": {
      const product = action.payload;
      const newQuantity = product.quantity + 1;
      return reducerReturn({
        ...state,
        products: state.products.map((p) =>
          p._id === product._id ? { ...p, quantity: newQuantity } : p
        ),
      });
    }

    case "[Cart] - Product minus 1": {
      const product = action.payload;
      const newQuantity = product.quantity - 1;
      if (newQuantity === 0) {
        return reducerReturn({
          ...state,
          products: state.products.filter((p) => p._id !== product._id),
        });
      }
      return reducerReturn({
        ...state,
        products: state.products.map((p) =>
          p._id === product._id ? { ...p, quantity: newQuantity } : p
        ),
      });
    }

    case "[Cart] - Remove Product": {
      return reducerReturn({
        ...state,
        products: state.products.filter((p) => p._id !== action.payload._id),
      });
    }

    case "[Cart] - Close Side Menu": {
      return {
        ...state,
        sideMenuOpen: false,
      };
    }

    case "[Cart] - Open Side Menu": {
      return {
        ...state,
        sideMenuOpen: true,
      };
    }

    case "[Cart] - Load Initial Data": {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
};
