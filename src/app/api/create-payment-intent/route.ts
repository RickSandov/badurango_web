import { getProductById } from "@/server/handlers/product.handlers";
import { stripe } from "../stripe";
import { connect, disconnect } from "@/server/db";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, quantity, total, email } = body;
  console.log({ email });
  try {
    let paymentIntent: Stripe.Response<Stripe.PaymentIntent>;
    if (total) {
      const description = `Donación de $${total} MXN para la construcción del Banco de Alimentos de Durango`;
      paymentIntent = await stripe.paymentIntents.create({
        currency: "mxn",
        description,
        amount: total * 100,
        receipt_email: email,
        automatic_payment_methods: {
          enabled: true,
        },
      });
    } else {
      await connect();
      const product = await getProductById(productId);
      await disconnect();
      const description = `Donación de ${quantity} unidades de ${product?.title} ${product?.description} para la construcción del Banco de Alimentos de Durango`;
      const totalAmount = product.price * quantity;
      paymentIntent = await stripe.paymentIntents.create({
        currency: "mxn",
        amount: totalAmount * 100,
        description,
        receipt_email: email,
        automatic_payment_methods: {
          enabled: true,
        },
      });
    }

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    await disconnect();
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
