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
  _id?: Types.ObjectId | string;
  donorName: string;
  description: string;
  message?: string;
  donorId: string | Types.ObjectId;
  paymentId?: string | Types.ObjectId;
  value: number;
  date: Date;
  type: TDonationType;
  paymentStatus: TDonationPaymentStatus;
  publicDonation: boolean;
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

// Buyer Types
export const buyerStatus = {
  pagado: "pagado",
  pendiente: "pendiente",
  cancelado: "cancelado",
} as const;

export const buyerStatusArray = Object.values(buyerStatus);

export type TBuyerStatus = ObjectValues<typeof buyerStatus>;

export type TBuyer = {
  _id: string;
  name: string;
  date: Date;
  phone: string;
  email: string;
  userId: Types.ObjectId | string;
  teamId: Types.ObjectId | string;
  braceletCount: number;
};
export type TBuyerWithBracelet = Omit<TBuyer, "teamId" | "userId"> & {
  bracelets: TBracelet[];
  team: string;
};

export type TBracelet = {
  _id: string;
  buyerId: Types.ObjectId | string;
  teamId: Types.ObjectId | string;
  date: Date;
  folio: string;
};

export type createBuyerDTO = {
  name: string;
  phone: string;
  userId: Types.ObjectId | string;
  status: TBuyerStatus;
};

// User types
export const userType = {
  admin: "admin",
  team: "team",
  teamAdmin: "teamAdmin",
} as const;

export const userTypeArray = Object.values(userType);

export type TUserType = ObjectValues<typeof userType>;

export type TUser = {
  _id: Types.ObjectId | string;
  teamId: Types.ObjectId | string;
  name: string;
  username: string;
  password: string;
  type: TUserType;
};

export type TDisplayUser = {
  _id: Types.ObjectId | string;
  name: string;
  totalSales: number;
  username: string;
  type: TUserType;
};

export type createUserDTO = {
  name: string;
  teamId: string;
  username: string;
  password: string;
  type: TUserType;
};

export type TTimeEvent = {
  _id: string;
  date: Date;
  description: string;
  title: string;
  image: {
    url: string;
    key: string;
  };
};

export type TPostTimeEvent = {
  date: string;
  description: string;
  title: string;
  image: File;
};

export type TPutTimeEvent = {
  _id: string;
  date?: string;
  description?: string;
  title?: string;
  image?: File;
};

// Team Types
export type TTeam = {
  _id: Types.ObjectId | string;
  name: string;
  description: string;
  color: string;
};
