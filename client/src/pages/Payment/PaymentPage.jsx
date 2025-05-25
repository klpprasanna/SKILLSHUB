
import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutButton from "../../components/Payments/StripeCheckoutButton";
import OrderSummary from "../../components/Payments/OrderSummary";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
  const { id } = useParams(); // courseId
  const course = { id, title: "React Mastery", price: 49.99 };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Complete Payment</h2>
      <OrderSummary course={course} />
      <Elements stripe={stripePromise}>
        <StripeCheckoutButton course={course} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
