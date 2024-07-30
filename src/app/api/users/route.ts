import { connect, disconnect } from "@/server/db";
import User from "@/server/models/user.model";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const {
      name,
      username,
      password,
      teamId,
      type = "teamAdmin",
    } = await request.json();
    await connect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log({
      name,
      username,
      password: hashedPassword,
      type,
      teamId,
    });
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      type,
      teamId,
    });
    await newUser.save();
    await disconnect();
    return new Response(
      JSON.stringify({
        user: newUser,
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
