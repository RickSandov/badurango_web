import { Payment } from "@/components/checkout/payment";
import { connect, disconnect } from "@/server/db";
import { getProductById } from '@/server/handlers/product.handlers';
import { CheckoutProduct } from "./checkout-product";
import { CashForm } from "./cash-form";
import { formatter } from "./helpers";
import { PersonaForm } from "./persona-form";
import { CashDonation } from "./cash-donation";
import { ProductDonation } from "./product-donation";
import { useLayoutEffect } from "react";

export default async function Page({
    searchParams,
}: {
    searchParams: { productId: string, quantity: string; paymentMethod: string }
}) {
    const { productId, quantity, paymentMethod } = searchParams;

    if (paymentMethod == 'efectivo') {
        return (
            <CashDonation />
        )
    }

    await connect();
    const product = await getProductById(productId);
    await disconnect();

    if (!product) return <h1>Producto no encontrado</h1>;

    const { price, title, description, image } = product!;
    const total = price * parseInt(quantity);

    return (
        <ProductDonation product={{ _id: productId, title, description, image, price, quantity: +quantity }} total={total} />
    )
}