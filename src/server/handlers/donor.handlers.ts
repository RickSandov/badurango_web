import { TPersonaForm } from "@/checkout-context";
import { TDonorDisplay, TDonorType, TDonor } from "@/types";
import { Donor } from "../models";

export async function SavePersonaForm(persona: TPersonaForm): Promise<TDonor> {
  const donor: TDonor = {
    name: persona.name,
    email: persona.email,
    phone: persona.phone,
    rfc: persona.rfc,
    type: persona.donorType as TDonorType,
    displayType: persona.displayType as TDonorDisplay,
    address: persona.address,
    city: persona.city,
    state: persona.state,
    postalCode: persona.postalCode,
    publicDonor: !persona.isAnonymous,
  };

  const donorExists = await getDonorByRfc(persona.rfc);
  if (donorExists) return donorExists;
  const newDonor = new Donor(donor);
  await newDonor.save();
  return newDonor;
}

export const getDonorByRfc = async (rfc: string) => {
  const donor = await Donor.findOne({ rfc });
  return donor;
};
