import { TDonation } from "@/types";
import { Schema, model, models } from "mongoose";

const DonationSchema = new Schema<TDonation>({
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  description: {
    type: String,
    required: false,
  },
  paymentId: {
    type: String,
    required: false,
  },
  donorName: {
    type: String,
    required: true,
  },
  donorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  publicDonation: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default models.Donation || model("Donation", DonationSchema);
