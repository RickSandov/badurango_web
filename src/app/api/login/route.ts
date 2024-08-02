import { createToken } from "@/lib/auth";
import { connect, disconnect } from "@/server/db";
import { getUser } from "@/server/handlers/user.handler";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    await connect();
    const user = await getUser(username);
    await disconnect();
    if (!user) {
      return new Response(
        JSON.stringify({ error: "No se pudo autenticar el usuario" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({ error: "No se pudo autenticar el usuario" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const token = createToken(
      user._id.toString(),
      user.type,
      user.teamId?.toString()
    );
    user.password = "";
    return new Response(JSON.stringify({ token, user }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ error: "No se pudo autenticar el usuario" }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
