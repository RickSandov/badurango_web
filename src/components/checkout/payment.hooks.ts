"use client";

import { api } from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export const useStripeConfig = ({
  publishableKey,
  productId,
  quantity,
  total,
  email,
}: {
  publishableKey: string;
  productId?: string;
  quantity?: number;
  total?: number;
  email: string;
}) => {
  const [stripePromise] = useState(loadStripe(publishableKey));
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!clientSecret) {
      setIsLoading(true);
      api
        .post("/create-payment-intent", {
          productId,
          quantity,
          total,
          email,
        })
        .then((req) => {
          setClientSecret(req.data.clientSecret);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          if (typeof err === "string") {
            return setError(err);
          }
          if (err.error) {
            return setError(err.error.message);
          }
          setError("Unknown error");
        });
    }
  }, []);

  return {
    stripePromise,
    clientSecret,
    error,
    isLoading,
  };
};
