// import { connect, disconnect } from "@/server/db";
// import { Product } from "@/server/models";

import { connect, disconnect } from "@/server/db";
import { getProducts } from "@/server/handlers/product.handlers";

// export async function POST(request: Request) {
//   const data = await request.json();

//   await connect();
//   const newProduct = new Product(data);
//   newProduct.save();
//   await disconnect();

//   return new Response(
//     JSON.stringify({ message: "Enviado correctamente", data: { newProduct } }),
//     {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
// }

export async function GET() {
  try {
    await connect();
    const products = await getProducts();
    await disconnect();
    return new Response(
      JSON.stringify({
        products,
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
} // export async function GET
