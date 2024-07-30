import { connect, disconnect } from "@/server/db";
import Bracelet from "@/server/models/bracelet.model";
import Buyer from "@/server/models/buyer.model";
import Team from "@/server/models/team.model";
import User from "@/server/models/user.model";
import { TDisplayUser } from "@/types";

export async function GET(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const teamId = params.teamId;
    await connect();
    const teamUsers = await User.find({ teamId });
    const displayUsers: TDisplayUser[] = [];
    for (const user of teamUsers) {
      const buyersCount = await Buyer.find({ userId: user._id });
      console.log({ buyersCount });
      const totalCount = buyersCount.reduce(
        (acc, buyer) => acc + buyer.braceletCount,
        0
      );
      displayUsers.push({
        _id: user._id,
        name: user.name,
        username: user.username,
        type: user.type,
        totalSales: totalCount,
      });
    }
    await disconnect();
    console.log("display team users: ", displayUsers);
    return new Response(JSON.stringify(displayUsers), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    await disconnect();
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
