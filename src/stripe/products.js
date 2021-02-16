require("dotenv").config();

const stripeKey = process.env.STRIPEKEY;
const stripe = require("stripe")(stripeKey);

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


// const getProd = async () => {
//   const prod = await getAllProducts();
//   console.log(prod);
// }

// const createProd = async () => {
//   const prod = await createSingleProduct(
//     "def", "456", "some guy", "Setagaya"
//   );
//   console.log(prod);
// }

// const updateProd = async () => {
//   const prod = await updateSingleProduct(
//     "prod_IxNcIhTQXTTYr6", "hij", "456", "another guy", "Setagaya"
//   );
//   console.log(prod);
// }
