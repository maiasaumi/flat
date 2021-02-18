const stripe = require("./config");

const getAllCustomers = async (req, res) => {
  try {
    const customers = await stripe.customers.list({
      limit: req.query.limit
    });
    res.send(customers);
  } catch (err) {
    console.error(err);
  }
};

const createSingleCustomer = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      name: req.body.name,
      description: req.body.desc,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email
    });
    res.send(customer);
  } catch (err) {
    console.error(err);
  }
};

const updateSingleCustomer = async (req, res) => {
  try {
    const customer = await stripe.customers.update(req.params.id, {
      name: req.body.name,
      description: req.body.desc,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      currency: req.body.currency,
      invoice_settings: req.body.invoice_settings,
      invoice_prefix: req.body.invoice_prefix
    });
    res.send(customer);
  } catch (err) {
    console.error(err);
  }
};

const deleteSingleCustomer = async (req, res) => {
  try {
    const customer = await stripe.customers.del(req.params.id);
    res.send(customer);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllCustomers,
  createSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer
};
