import { connect, disconnect } from "@/server/db";
import Team from "@/server/models/team.model";
import User from "@/server/models/user.model";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, description, color } = await request.json();
    console.log({ name, description, color });
    await connect();
    const newTeam = new Team({
      name,
      description,
      color,
    });
    await newTeam.save({
      name,
      description,
      color,
    });
    await disconnect();
    return new Response(
      JSON.stringify({
        team: newTeam,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// return new Response(
//     JSON.stringify({
//       message: "¡Gracias! La donación se ha registrado con éxito",
//       donation: newDonation,
//     }),
//     {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
