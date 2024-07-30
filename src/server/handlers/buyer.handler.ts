import { createBuyerDTO, TBuyer } from "@/types";
import Buyer from "../models/buyer.model";

export const getBuyers = async (): Promise<TBuyer[]> => {
  try {
    const buyers = await Buyer.find();
    return buyers;
  } catch (error) {
    return [];
  }
};

export const saveBuyer = async (buyer: TBuyer) => {
  const newBuyer = new Buyer({ ...buyer, date: Date.now() });
  await newBuyer.save();
  return newBuyer;
};
