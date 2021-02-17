const stripe = require("./config");

const getAllPrices = async (product = "", limit = 10) => {
  const prices = await stripe.prices.list({
    product: product,
    limit: limit,
  });
  console.log(prices);
  return prices;
};

const createSinglePrice = async (
  nickname,
  active,
  currency,
  product,
  reccuring,
  type,
  unit_amount
) => {
  const price = await stripe.prices.create({
    nickname: nickname,
    active: active,
    currency: currency,
    product: product,
    reccuring: reccuring,
    type: type,
    unit_amount: unit_amount,
  });
  return price;
};

const updateSinglePrice = async (
  id,
  nickname,
  active,
  currency,
  product,
  reccuring,
  type,
  unit_amount
) => {
  const price = await stripe.prices.update(id, {
    nickname: nickname,
    active: active,
    currency: currency,
    product: product,
    reccuring: reccuring,
    type: type,
    unit_amount: unit_amount,
  });
  return price;
};

const deleteSinglePrice = async (id) => {
  const price = await stripe.prices.del(id);
  return price;
};

console.log(getAllPrices());

module.exports = {
  getAllPrices,
  createSinglePrice,
  updateSinglePrice,
  deleteSinglePrice,
};
