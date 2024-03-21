import { TProduct } from "@/types";
import { Model } from "mongoose";
import { Product } from "../models";

export const getProductById = async (productId: string): Promise<TProduct> => {
  const product = await Product.findById(productId);
  return product;
};
