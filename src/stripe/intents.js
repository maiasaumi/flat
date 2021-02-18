const stripe = require("./config");

const createPaymentIntent = async (amount, currency) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: currency,
    metadata: {integration_check: 'accept_a_payment'},
  });
  return paymentIntent;
}

const getPaymentIntent = async (id) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    id
  );
  return paymentIntent;
}

const updatePaymentIntent = async (id, amount, currency) => {
  const paymentIntent = await stripe.paymentIntents.update(
    id, { amount: amount, currency: currency }
  );
  return paymentIntent;
}

const cancelPaymentIntent = async (id) => {
  const paymentIntent = await stripe.paymentIntents.cancel(
    id,
  );
  return paymentIntent;
}

module.exports = {
  createPaymentIntent,
  updatePaymentIntent,
  cancelPaymentIntent,
  getPaymentIntent,
}
