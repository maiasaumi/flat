const stripe = require("./config");

const getAllProducts = async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: req.query.limit
    });
    res.send(products);
  } catch(err) {
    console.error(err);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);
    const prices = await stripe.prices.list({
      product: req.params.id,
      limit: req.query.limit,
    });
    product.prices = prices.data;
    res.send(product);
  } catch(err) {
    console.error(err);
  }
};

const createSingleProduct = async (req, res) => {
  try {
    const product = await stripe.products.create({
      name: req.body.name,
      description: req.body.desc,
      active: req.body.active,
      metadata: {
        owner: req.body.owner,
        address: req.body.address,
        utilities: req.body.utilities
      }
    });
    res.send(product);
  } catch (err) {
    console.error(err);
  }
}

const updateSingleProduct = async (req, res) => {
  try {
    const product = await stripe.products.update(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.desc,
        active: req.body.active,
        metadata: {
          owner: req.body.owner,
          address: req.body.address,
          utilities: req.body.utilities
        }
      }
    );
    res.send(product);
  } catch(err) {
    console.error(err);
  }
}

const deleteSingleProduct = async (req, res) => {
  try {
    const product = await stripe.products.del(req.params.id);
    res.send(product);
  } catch(err) {
    console.error(err);
  }
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
}
