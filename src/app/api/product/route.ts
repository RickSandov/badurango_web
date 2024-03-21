// import { connect, disconnect } from "@/server/db";
// import { Product } from "@/server/models";

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
