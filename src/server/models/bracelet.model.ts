import { model, models, Schema } from "mongoose";
import { TBracelet } from "../../types/index";

const braceletSchema = new Schema<TBracelet>({
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  folio: {
    type: String,
    required: true,
  },
});

const Bracelet =
  models.Bracelet || model<TBracelet>("Bracelet", braceletSchema);

export default Bracelet;
