const {
  getAllCustomers,
  createSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer
} = require("../src/stripe/customers");

const express = require("express");

const router = express.Router();

router.route("/").get(getAllCustomers).post(createSingleCustomer);
router.route("/:id").patch(updateSingleCustomer).delete(deleteSingleCustomer);

module.exports = router;
