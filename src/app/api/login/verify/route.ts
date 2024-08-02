import { verifyToken } from "@/lib/auth";
import { connect, disconnect } from "@/server/db";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  if (!token) {
    return new Response(JSON.stringify({ error: "No token provided" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    await connect();
    const user = await verifyToken(token);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    user.password = "";
    await disconnect();
    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    await disconnect();
    return new Response(JSON.stringify({ error }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
