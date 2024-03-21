import { TProduct } from "@/types";
import { Model } from "mongoose";
import { Product } from "../models";

export const getProductById = async (productId: string): Promise<TProduct> => {
  const product = await Product.findById(productId);
  return product;
};

export const getProducts = async (): Promise<TProduct[]> => {
  const products = await Product.find();
  return products;
};
