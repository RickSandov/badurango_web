import { TTeam } from "@/types";
import { model, models, Schema } from "mongoose";

const teamSchema = new Schema<TTeam>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Team = models.Team || model<TTeam>("Team", teamSchema);

export default Team;
