
import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

const StripeCheckoutButton = ({ course }) => {
  const stripe = useStripe();

  const handleClick = async () => {
    const res = await fetch("http://localhost:5000/api/payments/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        courseId: course.id,
        courseTitle: course.title,
        coursePrice: course.price
      })
    });
    const data = await res.json();
    const result = await stripe.redirectToCheckout({ sessionId: data.sessionId });
    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button onClick={handleClick} className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
      Pay with Stripe
    </button>
  );
};

export default StripeCheckoutButton;
