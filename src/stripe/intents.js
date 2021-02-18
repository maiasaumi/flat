const stripe = require("./config");

const createPaymentIntent = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.query.amount,
      currency: req.query.currency,
      metadata: { integration_check: 'accept_a_payment' },
    });
    res.send(paymentIntent);
  } catch (err) {
    console.error(err);
  }
};

const getPaymentIntent = async (req, res) => {
  try {
    const id = req.params.id;
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    res.send(paymentIntent);
  } catch (err) {
    console.error(err);
  } 
};

const updatePaymentIntent = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.update(
      req.params.id, 
      { 
        amount: req.query.amount, 
        currency: req.query.currency, 
      }
    );
    res.send(paymentIntent);
  } catch (err) {
    console.log(err)
  }
};

const cancelPaymentIntent = async (res, req) => {
  try {
    const id = req.params.id;
    const paymentIntent = await stripe.paymentIntents.cancel(id);
    res.send(paymentIntent);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPaymentIntent,
  updatePaymentIntent,
  cancelPaymentIntent,
  getPaymentIntent,
}
