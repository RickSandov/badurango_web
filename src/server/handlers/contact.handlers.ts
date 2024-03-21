import { TContactForm, contactStatus } from "@/types";
import { Contact } from "../models";
import { Model } from "mongoose";
import { connect, disconnect } from "../db";

// omit created at and status
// type TNewContact = TContactForm;

export const SaveContactForm = async (
  contactInfo: TContactForm
): Promise<Model<TContactForm>> => {
  const newContactForm = new Contact({
    ...contactInfo,
    status: contactStatus.pendiente,
    createdAt: Date.now(),
  });
  await newContactForm.save();
  return newContactForm;
};
