import { TBuyer } from "@/types";
import { model, models, Schema } from "mongoose";

const BuyerSchema = new Schema<TBuyer>({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  teamId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Team",
  },
  braceletCount: {
    type: Number,
    required: true,
  },
});

// console.log({
//   name: string;
//   date: Date;
//   phone: string;
//   email: string;
//   userId: Types.ObjectId | string;
//   teamId: Types.ObjectId | string;
//   braceletCount: number;
// })

export default models.Buyer || model("Buyer", BuyerSchema);

// _id: string;
//   name: string;
//   date: Date;
//   phone: string;
//   userId: string;
//   status: TBuyerStatus;
