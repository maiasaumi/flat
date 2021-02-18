const stripe = require("./config");

const createPaymentIntent = async (amount, currency) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    metadata: {integration_check: 'accept_a_payment'},
  });
  return paymentIntent;
}

module.exports = {
  createPaymentIntent
}
