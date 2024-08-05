import { verifyToken } from "@/lib/auth";
import { connect, disconnect } from "@/server/db";
import User from "@/server/models/user.model";
import bcrypt from "bcrypt";

export async function PATCH(
  request: Request,
  { params }: { params: { token: string } }
) {
  try {
    const body = await request.json();
    const { token } = params;
    console.log({
      body,
      token,
    });
    await connect();
    const user = await verifyToken(token);
    if (!user) {
      await disconnect();
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const newUserInfo: {
      name: string;
      username?: string;
      password?: string;
    } = {
      name: body.name || user.name,
      username: undefined,
      password: undefined,
    };

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      newUserInfo.password = hashedPassword;
    }

    if (body.username && body.username !== user.username) {
      const userExists = await User.findOne({ username: body.username });
      if (userExists) {
        await disconnect();
        return new Response(JSON.stringify({ error: "User already exists" }), {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      newUserInfo.username = body.username;
    }

    const newUser = await User.updateOne({ _id: user._id }, newUserInfo, {
      new: true,
    });

    await disconnect();

    return new Response(JSON.stringify("User updated"), {
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
