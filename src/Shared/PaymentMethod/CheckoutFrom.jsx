import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import useAuth from "../../CustomHook/useAuth";
import useAxiosPublic from "../../CustomHook/useAxiosPublic";
import toast from "react-hot-toast";

const CheckoutFrom = () => {
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const totalPrice = 24;

    axiosPublic
      .post(
        "/create-payment-intent",
        { price: parseInt(totalPrice) },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosPublic]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Stripe Error", error);
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // paid status change
        toast.success("Payment Successful");
        const newBadge = "Gold Badge";
        const member = await axiosPublic.patch(
          `/badge/${user?.email}`,
          {
            newBadge,
          },
          { withCredentials: true }
        );
        console.log(member.data);

        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <div>
      {" "}
      <div className="lg:w-[990px] mx-auto">
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="my-4">
            <button
              disabled={!stripe || !clientSecret}
              className="bg-[#570DF8] py-[6px] text-white px-6 rounded-md font-semibold"
              type="submit"
            >
              Pay
            </button>
          </div>

          <p className="text-red-500">{error}</p>
          {transactionId && (
            <p className="text-green-500">
              Your transaction id: {transactionId}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutFrom;
