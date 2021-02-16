require("dotenv").config();

const stripeKey = process.env.STRIPEKEY;

const stripe = require("stripe")(stripeKey);
console.log(stripe);
