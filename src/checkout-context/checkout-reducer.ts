import { TDonationType, donationType } from "@/types";
import { TPersonaForm } from ".";
import { CheckoutState } from "./checkout-provider";

type CheckoutActionType =
  | {
      type: "[Checkout] - setHasRegistered";
      payload: boolean;
    }
  | {
      type: "[Checkout] - setPersona";
      payload: TPersonaForm;
    }
  | {
      type: "[Checkout] - setDonationType";
      payload: TDonationType;
    }
  | {
      type: "[Checkout] - setProductToDonate";
      payload: string; // product id
    };

export const ceckoutReducer = (
  state: CheckoutState,
  action: CheckoutActionType
): CheckoutState => {
  switch (action.type) {
    case "[Checkout] - setHasRegistered":
      return {
        ...state,
        hasRegistered: action.payload,
      };

    case "[Checkout] - setPersona":
      return {
        ...state,
        persona: action.payload,
        hasRegistered: true,
      };

    case "[Checkout] - setDonationType":
      return {
        ...state,
        donationType: action.payload,
      };

    case "[Checkout] - setProductToDonate":
      return {
        ...state,
        productToDonate: action.payload,
        donationType: donationType.producto,
      };

    // case "[Checkout] - resetPersona":
    //   return {
    //     ...state,
    //     persona: null,
    //   };

    default:
      return state;
  }
};
