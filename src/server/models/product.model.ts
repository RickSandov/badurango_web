import { TProduct } from "@/types";
import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default models.Product || model("Product", ProductSchema);
