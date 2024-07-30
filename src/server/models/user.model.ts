import { TUser } from "@/types";
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  teamId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Team",
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default models.User || model("User", UserSchema);
