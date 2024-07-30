import { TTimeEvent } from "@/types";
import { model, models, Schema } from "mongoose";

const TimeEventSchema = new Schema<TTimeEvent>({
  date: {
    type: Date,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  image: {
    url: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
});

export default models.TimeEvent || model("TimeEvent", TimeEventSchema);
