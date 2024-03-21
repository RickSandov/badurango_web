import { connect, disconnect } from "@/server/db";
import { SavePersonaForm } from "@/server/handlers/donor.handlers";
import { stripe } from "../stripe";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connect();
    const newPersona = await SavePersonaForm(data);
    await disconnect();
    return new Response(JSON.stringify(newPersona), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log({ error });
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// export async function GET() {
//   const payment_intent_id = "pi_3OwAXNCuh7xDn02h1glJoQNF";

//   try {
//     const payment_intent = await stripe.paymentIntents.retrieve(
//       payment_intent_id
//     );
//     console.log({ payment_intent });
//     return new Response(JSON.stringify({ payment_intent }), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     console.log({ error });
//     return new Response(JSON.stringify({ error }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
