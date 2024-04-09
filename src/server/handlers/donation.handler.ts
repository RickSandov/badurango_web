import { TDonation } from "@/types";
import { Donation } from "../models";
import { stripe } from "@/app/api/stripe";

export const getDonationById = async (
  donationId: string
): Promise<TDonation> => {
  const donation = await Donation.findById(donationId);

  if (donation.paymentStatus === "requires_action") {
    stripe.paymentIntents.retrieve(donation.paymentId).then((res) => {
      const paymentStatus = res.status;
      if (paymentStatus !== donation.paymentStatus) {
        donation.paymentStatus = paymentStatus;
        donation.save();
      }
    });
  }

  return donation;
};
