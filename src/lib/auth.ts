import { getUser, getUserById } from "@/server/handlers/user.handler";
import { TUser, TUserType } from "@/types";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || "bancodealimentosbyRickSandov";
const expiresIn = "24h";

export const createToken = (
  userId: string,
  userType: TUserType,
  teamId?: string
) => {
  const token = jwt.sign({ userId, userType, teamId }, secret, { expiresIn });
  return `${token}`;
};

export async function verifyToken(token: string): Promise<TUser | null> {
  try {
    const data = jwt.verify(token, secret);
    const userId = (data as { userId: string }).userId;
    if (!userId) return null;
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    console.log("verifyToken(): ", { error });
    return null;
  }
}
