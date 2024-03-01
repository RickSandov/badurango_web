export async function GET(request: Request) {
  console.log("Hello world from /api/payment-config");

  return new Response(
    JSON.stringify({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
