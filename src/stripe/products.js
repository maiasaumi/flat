const stripe = require("./config");

const getAllProducts = async (limit=10) => {
  const products = await stripe.products.list({
    limit: limit
  });
  return products;
};

const createSingleProduct = async (name, desc, owner, address) => {
  const product = await stripe.products.create({
    name: name,
    description: desc,
    metadata: {
      owner: owner,
      address: address
    }
  });
  return product;
}

const updateSingleProduct = async (id, name, desc, owner, address) => {
  const product = await stripe.products.update(
    id,
    {
      name: name,
      description: desc,
      metadata: {
        owner: owner,
        address: address
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
