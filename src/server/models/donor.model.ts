import { TDonor } from "@/types";
import { Schema, model, models } from "mongoose";

const DonorSchema = new Schema<TDonor>({
  name: {
    type: String,
    required: true,
  },
  rfc: {
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
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  donations: {
    type: [Schema.Types.ObjectId],
    ref: "Donation",
  },
  type: {
    type: String,
    required: true,
  },
  displayType: {
    type: String,
    required: true,
  },
  publicDonor: {
    type: Boolean,
    required: true,
    default: false,
  },
  totalAmountDonated: {
    type: Number,
    default: 0,
  },
});

export default models.Donor || model("Donor", DonorSchema);
