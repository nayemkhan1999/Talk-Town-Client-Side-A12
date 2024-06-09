// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// import "./common.css";
// import { useEffect, useState } from "react";
// import useAxiosPublic from "../../CustomHook/useAxiosPublic";
// import useAuth from "../../CustomHook/useAuth";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState("");
//   const axiosPublic = useAxiosPublic();
//   const { user } = useAuth();
//   const [clientSecret, setClientSecret] = useState("");
//   const [transactionId, setTransactionId] = useState();

//   useEffect(() => {
//     const price = 24;

//     axiosPublic
//       .post("/create-payment-intent", { price }, { withCredentials: true })
//       .then((res) => {
//         setClientSecret(res.data.clientSecret);
//       });
//   }, [axiosPublic]);

//   // =====================
//   //   const totalPrice = Price;

//   //   axiosSecure.post("/create-payment-intent",{ price: parseInt(totalPrice) },
//   //       { withCredentials: true }
//   //     )
//   //     .then((res) => {
//   //       console.log(res.data.clientSecret);
//   //       setClientSecret(res.data.clientSecret);
//   //     });
//   // }, [axiosSecure, Price]);

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       // console.log("[error]", error);
//       setError(error.message);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//       setError("");
//     }

//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email,
//             name: user?.displayName,
//           },
//         },
//       });

//     if (confirmError) {
//       console.log("confirm error");
//     } else {
//       console.log("payment intent", paymentIntent);
//       if (paymentIntent.status === "succeeded") {
//         // paid status change

//         console.log("transaction id", paymentIntent.id);
//         setTransactionId(paymentIntent.id);
//       }
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn shadow-xl bg-slate-200 font-bold"
//           type="submit"
//           disabled={!stripe}
//         >
//           Pay
//         </button>
//         <p className="text-red-600">{error}</p>
//       </form>
//     </>
//   );
// };

// export default CheckoutForm;
// ======================================
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import useAuth from "../../CustomHook/useAuth";
import useAxiosPublic from "../../CustomHook/useAxiosPublic";

const CheckoutFrom = () => {
  const { user } = useAuth();
  const [transactionId, setTransactionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();

  const axiosSecure = useAxiosPublic();
  useEffect(() => {
    const totalPrice = 24;

    axiosSecure
      .post(
        "/create-payment-intent",
        { price: parseInt(totalPrice) },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

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
