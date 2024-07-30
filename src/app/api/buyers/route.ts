import { connect, disconnect } from "@/server/db";
import { getBuyers, saveBuyer } from "@/server/handlers/buyer.handler";
import Bracelet from "@/server/models/bracelet.model";
import Team from "@/server/models/team.model";
import userModel from "@/server/models/user.model";
import { TTeam } from "@/types";

export async function GET() {
  try {
    await connect();
    const buyers = await getBuyers();
    const teams = await Team.find();

    const stats: {
      team: string;
      quantity: number;
    }[] = [];

    for (const team of teams as TTeam[]) {
      const userBuyers = buyers.filter(
        (buyer) => buyer.teamId.toString() == team._id.toString()
      );
      stats.push({
        team: team.name,
        quantity: userBuyers.reduce((a, b) => a + b.braceletCount, 0),
      });
    }

    await disconnect();
    return new Response(
      JSON.stringify({
        stats: stats,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    await disconnect();
    console.log("error on GET /buyers\n", { error });
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("req data: ", data);
    await connect();
    const newBuyer = await saveBuyer({
      ...data,
      braceletCount: data.bracelets.length || 1,
    });
    console.log({ newBuyer });

    for (const bracelet of data.bracelets) {
      const newBracelet = new Bracelet({
        buyerId: newBuyer._id,
        date: Date.now(),
        folio: bracelet.folio,
      });
      await newBracelet.save();
    }

    await disconnect();
    return new Response(JSON.stringify({ message: "ok" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log({ error });
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
