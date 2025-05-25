import express from 'express'
import Stripe from 'stripe';
(process.env.STRIPE_SECRET_KEY);
const paymentRoutes = express.Router();

paymentRoutes.post('/create-checkout-session', async (req, res) => {
  const { course } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: course.title,
          description: course.description
        },
        unit_amount: course.price * 100
      },
      quantity: 1
    }],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`
  });

  res.json({ id: session.id });
});

export default paymentRoutes;