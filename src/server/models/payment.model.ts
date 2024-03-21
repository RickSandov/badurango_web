import { TPayment } from "@/types";
import { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema<TPayment>({
  date: {
    type: Date,
    required: true,
  },
  paymentRef: {
    type: String,
    required: true,
  },
  donorName: {
    type: String,
    required: true,
  },
  donorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
});

export default models.Payment || model("Payment", PaymentSchema);
