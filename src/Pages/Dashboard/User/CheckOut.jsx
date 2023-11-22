import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Components/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const axiosInstance = useAxios();

  const elements = useElements();
  const { carts, refetch: cartLoader } = useCart();
  const totalPrice = carts?.reduce((a, b) => a + b.price, 0).toFixed(2);
  const [error, setError] = useState("");
  //   const [clientSecret, setClientSecret] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [postal, setPostal] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    axiosInstance
      .post("/create-payment-intent", {
        price: totalPrice || 1,
      })
      .then(async (response) => {
        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardNumberElement);

        if (card == null) {
          return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
            phone: "To be Added",
            address: {
              city: "This is the city",
              country: "BD",
              line1: "This is line1",
              line2: "This is line2",
              postal_code: postal,
              state: "This is the state",
            },
          },
        });

        if (error) {
          console.log("CheckOut Error: ", error);
          setError(error.message);
          setErrorMessage(error.message);
          setPaymentMethod(null);
          return;
        } else {
          setError("");
          setPaymentMethod(paymentMethod);
          setErrorMessage(null);
        }

        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(response.data.clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName || "Anonymous",
                email: user?.email || "Anonymous@gmail.com",
              },
            },
          });

        if (confirmError) {
          console.log(confirmError);
          if (
            confirmError.type === "card_error" ||
            confirmError.type === "validation_error"
          ) {
            setError(confirmError.message);
          } else {
            setError("An unexpected error occurred.");
          }
          return;
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          const orderData = {
            email: user.email,
            name: user.displayName,
            status: "pending",
            paymentDate: Date.now(),
            paymentMethodDetails: paymentMethod,
            paymentConfirmDetails: paymentIntent,
            cartIDs: carts.map((item) => item._id),
            itemIDs: carts.map((item) => item.itemId),
          };
          const response = await axiosInstance.post("/make-order", orderData);
          cartLoader();
          console.log(response.data.result1);
          console.log(response.data.result2);
          console.log(orderData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="p-4 border mb-10 border-[#D1A054] rounded-md flex items-center gap-5">
          <div className="flex flex-col gap-3">
            <div className="">
              <label className="text-[#D1A054] font-semibold" htmlFor="number">
                Card Number
              </label>

              <CardNumberElement
                className="p-2 border-2 rounded-full mt-2 w-[300px]"
                id="cardNumber"
                options={ELEMENT_OPTIONS}
              ></CardNumberElement>
            </div>
            <div className="">
              <label className="text-[#D1A054] font-semibold" htmlFor="expiry">
                CVC
              </label>
              <CardCvcElement
                className="p-2 border-2 rounded-full mt-2 w-[300px]"
                id="expiry"
                options={ELEMENT_OPTIONS}
              ></CardCvcElement>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="">
              <label className="text-[#D1A054] font-semibold" htmlFor="expiry">
                Card Expiration
              </label>
              <CardExpiryElement
                className="p-2 border-2 rounded-full mt-2 w-[300px]"
                id="cvc"
                options={ELEMENT_OPTIONS}
              ></CardExpiryElement>
            </div>
            <div className="">
              <label className="text-[#D1A054] font-semibold" htmlFor="postal">
                Postal Code
              </label>
              <br />
              <input
                className="bg-transparent p-2 py-1 border-2 rounded-full mt-2 w-[300px]"
                id="postal"
                required
                placeholder="12345"
                value={postal}
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {errorMessage && (
          <p className="font-semibold text-red-600">{errorMessage}</p>
        )}
        {paymentMethod && (
          <p className="font-semibold text-green-600">{paymentMethod.id}</p>
        )}
        <button
          className="bg-[#570DF8] px-10 py-3 rounded-md text-white font-semibold duration-300 active:scale-75 disabled:bg-slate-300"
          type="submit"
          disabled={!stripe || !carts || !totalPrice == 0}
        >
          Pay by Card ${totalPrice}
        </button>
        <p className="font-semibold text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckOut;
