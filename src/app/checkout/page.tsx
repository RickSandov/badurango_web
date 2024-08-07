
import { connect, disconnect } from "@/server/db";
import { getProductById } from '@/server/handlers/product.handlers';
import { CashDonation } from "./cash-donation";
import { ProductDonation } from "./product-donation";

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