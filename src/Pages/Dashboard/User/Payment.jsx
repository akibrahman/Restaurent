import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Components/Heading";
import "../../../Css/Payment.css";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_public_key);

const Payment = () => {
  const appearance = {
    theme: "night",
    labels: "floating",
  };

  return (
    <div className="w-[900px]">
      <Heading
        heading="Make payment"
        subHeading="Making Payment is very Easy"
      ></Heading>

      <Elements options={appearance} stripe={stripePromise}>
        <div className="p-4 border border-[#D1A054] rounded-md">
          <CheckOut></CheckOut>
        </div>
      </Elements>
    </div>
  );
};

export default Payment;
