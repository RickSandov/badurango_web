import { SaveContactForm } from "@/server/handlers/contact.handlers";
import { connect, disconnect } from "@/server/db";

export async function POST(request: Request) {
  const data = await request.json();

  console.log({ data });

  try {
    await connect();
    const newContact = await SaveContactForm(data);
    console.log({ newContact });
    await disconnect();
  } catch (error) {
    console.log({ error });
  }

  return new Response(
    JSON.stringify("¡Gracias! Nos comunicaremos contigo lo antes posible."),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
