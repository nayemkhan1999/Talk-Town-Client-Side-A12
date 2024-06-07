import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../PaymentMethod/CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY);

const MemberShip = () => {
  return (
    <div className="averia-serif lg:mx-40 mt-5">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default MemberShip;
