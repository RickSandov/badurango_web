import { TDonorDisplay, TDonorType } from "@/types/index.ts";
import { CheckoutContext, CheckoutContextProps } from "./checkout-context.tsx";
import { CheckoutProvider } from "./checkout-provider.tsx";
import { ceckoutReducer as CheckoutReducer } from "./checkout-reducer.ts";

export { CheckoutContext, CheckoutProvider, CheckoutReducer };

export type TPersonaForm = {
  name: string;
  rfc: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  donorType: TDonorType;
  displayType: TDonorDisplay;
  message: string;
  publicName: string;
  isAnonymous: boolean;
};
