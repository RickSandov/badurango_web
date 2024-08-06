import { connect, disconnect } from "@/server/db";
import { getBuyers } from "@/server/handlers/buyer.handler";
import Bracelet from "@/server/models/bracelet.model";
import Team from "@/server/models/team.model";
import { TBuyerWithBracelet } from "@/types";

export async function GET() {
  try {
    await connect();
    const buyers = await getBuyers();
    const bracelets = await Bracelet.find();
    const teams = await Team.find();
    const buyerWithBracelets: TBuyerWithBracelet[] = [];
    await disconnect();
    for (const buyer of buyers) {
      const buyerBracelets = bracelets.filter(
        (bracelet) => bracelet.buyerId.toString() == buyer._id.toString()
      );
      const team = teams.find(
        (team) => team._id.toString() == buyer.teamId.toString()
      );
      buyerWithBracelets.push({
        _id: buyer._id,
        name: buyer.name,
        date: buyer.date,
        phone: buyer.phone,
        email: buyer.email,
        braceletCount: buyerBracelets.length,
        bracelets: buyerBracelets,
        team: team.name,
      });
    }
    return new Response(JSON.stringify(buyerWithBracelets), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
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
