const stripe = require("./config");

const getAllPrices = async (req, res) => {
  try {
    const prices = await stripe.prices.list({
      product: req.query.product,
      limit: req.query.limit,
    });
    res.send(prices);
  } catch (err) {
    console.error(err);
  }
};

const createSinglePrice = async (req, res) => {
  try {
    const price = await stripe.prices.create({
      nickname: req.body.nickname,
      active: req.body.active,
      currency: req.body.currency,
      product: req.body.product,
      reccuring: req.body.reccuring,
      type: req.body.type,
      unit_amount: req.body.unit_amount,
    });
    res.sent(price);
  } catch (err) {
    console.error(err);
  }
};

const updateSinglePrice = async (req, res) => {
  try {
    const price = await stripe.prices.update(req.params.id, {
      nickname: req.body.nickname,
      active: req.body.active,
      currency: req.body.currency,
      product: req.body.product,
      reccuring: req.body.reccuring,
      type: req.body.type,
      unit_amount: req.body.unit_amount,
    });
    res.send(price);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllPrices,
  createSinglePrice,
  updateSinglePrice,
};
