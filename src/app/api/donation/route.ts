import { connect, disconnect } from "@/server/db";
import { TDonationPaymentStatus, TDonationType, donationType } from "@/types";
import { Donation, Donor, Product } from "@/server/models";
import { getProductById } from "@/server/handlers/product.handlers";
import { getDonorByRfc } from "@/server/handlers/donor.handlers";

export async function POST(request: Request) {
  const data: {
    paymentId: string;
    type: TDonationType;
    productId: string;
    rfc: string;
    amount: number;
    message: string;
    paymentStatus: TDonationPaymentStatus;
  } = await request.json();

  try {
    await connect();
    const donor = await getDonorByRfc(data.rfc);
    const product = await getProductById(data.productId);

    const description = product
      ? `Donación de ${data.amount / product.price} unidades de ${
          product.title
        } ${product.description} hecha por ${donor?.name} con RFC ${donor?.rfc}`
      : `Donación de efectivo por la cantidad de ${data.amount} hecha por ${donor?.name} con RFC ${donor?.rfc}`;

    const donationInfo = {
      donorName: donor.name,
      description,
      message: data.message,
      donorId: donor._id,
      paymentId: data.paymentId,
      value: data.amount,
      date: new Date(),
      type: data.type,
      paymentStatus: data.paymentStatus,
    };
    const newDonation = new Donation(donationInfo);
    newDonation.save();
    const updatedDonor = await Donor.findByIdAndUpdate(donor._id, {
      $push: { donations: newDonation._id },
    });
    console.log({ updatedDonor });
    await disconnect();

    return new Response(
      JSON.stringify("¡Gracias! La donación se ha registrado con éxito"),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    await disconnect();
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
