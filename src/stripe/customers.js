const stripe = require("./config");

const getAllCustomers = async (limit = 10) => {
  const customers = await stripe.customers.list({
    limit: limit,
  });
  return customers;
};

//what information do I need here?
const createSingleCustomer = async (
  name,
  desc,
  address,
  phone,
  email,
  currency,
  invoice_settings,
  invoice_prefix
) => {
  const customer = await stripe.customers.create({
    name: name,
    description: desc,
    address: address,
    phone: phone,
    email: email,
    currency: currency,
    invoice_settings: invoice_settings,
    invoice_prefix: invoice_prefix,
  });
  return customer;
};

const updateSingleCustomer = async (
  id,
  name,
  desc,
  address,
  phone,
  email,
  currency,
  invoice_settings,
  invoice_prefix
) => {
  const customer = await stripe.customers.update(id, {
    name: name,
    description: desc,
    address: address,
    phone: phone,
    email: email,
    currency: currency,
    invoice_settings: invoice_settings,
    invoice_prefix: invoice_prefix,
  });
  return customer;
};

const deleteSingleCustomer = async (id) => {
  const customer = await stripe.customers.del(id);
  return customer;
};

module.exports = {
  getAllCustomers,
  createSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
};
