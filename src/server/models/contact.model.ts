import { TContactForm } from "@/types";
import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema<TContactForm>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: false,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pendiente",
  },
});

export default models.Contact || model("Contact", ContactSchema);
