import { TDonation } from "@/types";
import { Donation } from "../models";

export const getDonationById = async (
  donationId: string
): Promise<TDonation> => {
  const donation = await Donation.findById(donationId);
  return donation;
};
