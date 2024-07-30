import { TUser } from "@/types";
import User from "../models/user.model";

export const getUser = async (username: string): Promise<TUser | null> => {
  try {
    const user = await User.findOne({ username });
    if (user) return user;
    throw new Error("No existe");
  } catch (error) {
    console.log("getUser: ", error);
    return null;
  }
};
export const getUserById = async (id: string): Promise<TUser | null> => {
  try {
    const user = await User.findById(id);
    if (user) return user;
    throw new Error("No existe");
  } catch (error) {
    console.log("getUser: ", error);
    return null;
  }
};
