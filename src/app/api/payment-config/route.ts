export async function GET(request: Request) {
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
