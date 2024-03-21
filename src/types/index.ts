import { Types } from "mongoose";

export type ObjectValues<T> = T[keyof T];

// Donor Types
export const donorType = {
  fisica: "persona física",
  moral: "persona moral",
} as const;

export const donorTypeArray = Object.values(donorType);

export type TDonorType = ObjectValues<typeof donorType>;

export const donorDisplay = {
  e: "empresa",
  p: "particular",
} as const;

export const donorDisplayArray = Object.values(donorDisplay);

export type TDonorDisplay = ObjectValues<typeof donorDisplay>;

export type TDonor = {
  _id?: Types.ObjectId | string;
  name: string;
  rfc: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  donations?: Types.ObjectId[];
  totalAmountDonated?: number;
  type: TDonorType;
  displayType: TDonorDisplay;
  publicDonor: boolean;
};

// Product Types
export type TProduct = {
  _id: Types.ObjectId | string;
  title: string;
  description: string;
  image: string;
  price: number;
};

// Donation Types
export const donationType = {
  producto: "producto",
  servicio: "servicio",
  voluntariado: "voluntariado",
  efectivo: "efectivo",
  alimento: "alimento",
} as const;

export const donationTypeArray = Object.values(donationType);

export type TDonationType = ObjectValues<typeof donationType>;

export type TDonation = {
  donorName: string;
  description: string;
  message?: string;
  donorId: string | Types.ObjectId;
  paymentId?: string | Types.ObjectId;
  value: number;
  date: Date;
  type: TDonationType;
  paymentStatus: TDonationPaymentStatus;
};

// Payment Types
export type TPayment = {
  date: Date;
  paymentRef: string;
  donorName: string;
  donorId: string | Types.ObjectId;
  paymentMethod: string;
  paymentStatus: string;
};

// Contact Types
export const contactType = {
  voluntariado: "voluntariado",
  servicio: "servicio",
  alimento: "alimento",
} as const;

export const contactTypeArray = Object.values(contactType);

export type TContactType = ObjectValues<typeof contactType>;

export const contactStatus = {
  pendiente: "pendiente",
  contactado: "contactado",
  rechazado: "rechazado",
  aceptado: "aceptado",
} as const;

export const contactStatusArray = Object.values(contactStatus);

export type TContactStatus = ObjectValues<typeof contactStatus>;

export type TContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: TContactType;
  status: TContactStatus;
  createdAt: Date;
};

export const donationPaymentStatus = {
  succeeded: "succeeded",
  requires_confirmation: "requires_confirmation",
  requires_action: "requires_action",
  processing: "processing",
} as const;

export const donationPaymentStatusArray = Object.values(donationPaymentStatus);

export type TDonationPaymentStatus = ObjectValues<typeof donationPaymentStatus>;

export type TPaymentIntent = {
  amount: number;
  amount_details: { tip: any };
  automatic_payment_methods: { allow_redirects: string; enabled: boolean };
  canceled_at: null | Date;
  cancellation_reason: null | string;
  capture_method: "automatic";
  client_secret: string;
  confirmation_method: "automatic";
  created: number;
  currency: string;
  description: null | string;
  id: string;
  last_payment_error: null | any;
  livemode: boolean;
  next_action: null | any;
  object: "payment_intent";
  payment_method: string;
  payment_method_configuration_details: { id: string; parent: null | string };
  payment_method_options: { card: { installments: { enabled: boolean } } };
  payment_method_types: string[];
  processing: null | any;
  receipt_email: null | string;
  setup_future_usage: null | string;
  shipping: null | any;
  source: null | any;
  status: TDonationPaymentStatus;
};
