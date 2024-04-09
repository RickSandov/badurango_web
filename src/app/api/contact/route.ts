import { SaveContactForm } from "@/server/handlers/contact.handlers";
import { connect, disconnect } from "@/server/db";
import { sendSuccessDonationEmail } from "@/emails";
import { Types } from "mongoose";
import { TContactType } from "@/types";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    await connect();
    const newContact = await SaveContactForm(data);
    console.log({ newContact });
    await disconnect();
  } catch (error) {
    console.log({ error });
  }

  return new Response(
    JSON.stringify("¡Gracias! Nos comunicaremos contigo lo antes posible."),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// export async function GET(request: Request) {
//   const {
//     name,
//     email,
//     phone,
//     type,
//     productId,
//     message,
//     publicDonation,
//   }: {
//     name: string;
//     email: string;
//     phone: string;
//     type: TContactType;
//     productId: string;
//     message: string;
//     publicDonation: boolean;
//   } = await request.json();

//   await sendSuccessDonationEmail({
//     donor: {
//       _id: new Types.ObjectId("65fc919585a943270c0f46af"),
//       name: "Ricardo Javier Sandoval",
//       rfc: "SACR010603QMA",
//       email: "i.s.ricardo.sandoval@gmail.com",
//       phone: "6183371227",
//       address: "Tule 314",
//       city: "durango",
//       state: "durango",
//       postalCode: "34127",
//       donations: [
//         new Types.ObjectId("65fe820ea837fa85b6578480"),
//         new Types.ObjectId("6609ee9b5becca9e7db57545"),
//         new Types.ObjectId("6609eef75becca9e7db5754d"),
//         new Types.ObjectId("6609efefc1f34afb37be98e9"),
//         new Types.ObjectId("6609f09cc1f34afb37be98f4"),
//         new Types.ObjectId("6609f315065b7b979023abfa"),
//         new Types.ObjectId("6609f3a8065b7b979023ac05"),
//         new Types.ObjectId("6609f49c065b7b979023ac10"),
//       ],
//       type: "persona física",
//       displayType: "empresa",
//       publicDonor: true,
//       totalAmountDonated: 0,
//     },
//     donationDate: "31/03/2024",
//     product: {
//       _id: new Types.ObjectId("65ed3b257fb0db7841d8ea77"),
//       title: "Cemento CPC40",
//       description: "50kg",
//       image: "/images/cemento.png",
//       price: 250,
//     },
//     total: 250,
//     to: "i.s.ricardo.sandoval@gmail.com",
//     donationId: "",
//   });
// }
