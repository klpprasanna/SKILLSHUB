import axios from 'axios';

export default function Checkout({ course }) {
  const handleCheckout = async () => {
    const { data } = await axios.post('/api/payment/create-checkout-session', { course });
    window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
  };

  return <button onClick={handleCheckout}>Buy Now for ${course.price}</button>;
}
