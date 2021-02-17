require("dotenv").config();

const stripeKey = process.env.STRIPE_KEY;
const HOST = process.env.STRIPE_HOST || "api.stripe.com"
const PORT = process.env.STRIPE_PORT || "443";
const PROTOCOL = process.env.STRIPE_PROTOCOL || "https";

const stripe = require("stripe")(stripeKey, {
  host: HOST,
  port: PORT,
  protocol: PROTOCOL
});

module.exports = stripe;
