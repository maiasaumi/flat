const stripe = require("./config");

const getAllProducts = async (limit=10) => {
  const products = await stripe.products.list({
    limit: limit
  });
  return products;
};

const createSingleProduct = async (name, desc, active, owner, address, utilities) => {
  const product = await stripe.products.create({
    name: name,
    description: desc,
    active: active,
    metadata: {
      owner: owner,
      address: address,
      utilities: utilities
    }
  });
  return product;
}

const updateSingleProduct = async (id, name, desc, active, owner, address, utilities) => {
  const product = await stripe.products.update(
    id,
    {
      name: name,
      description: desc,
      active: active,
      metadata: {
        owner: owner,
        address: address,
        utilities: utilities
      }
    }
  );
  return product;
}

const deleteSingleProduct = async (id) => {
  const product = await stripe.products.del(id);
  return product;
}

module.exports = {
  getAllProducts,
  createSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
}
