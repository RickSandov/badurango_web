import { TDonation } from "@/types";
import { Donation } from "../models";

export const getDonationById = async (
  donationId: string
): Promise<TDonation> => {
  console.log({ donationId });
  const donation = await Donation.findById(donationId);
  return donation;
};
