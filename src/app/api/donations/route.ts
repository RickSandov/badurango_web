import { connect, disconnect } from "@/server/db";
// import { getDonations } from "@/server/handlers/donation.handler";

export async function GET() {
  // try {
  //   await connect();
  //   const donations = await getDonations();
  //   await disconnect();
  //   return new Response(
  //     JSON.stringify({
  //       donations,
  //     }),
  //     {
  //       status: 200,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // } catch (error) {
  //   await disconnect();
  //   return new Response(JSON.stringify({ error }), {
  //     status: 500,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
  return new Response(
    JSON.stringify({
      donations: [],
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
} // export async function GET
