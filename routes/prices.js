const {
  getAllPrices,
  createSinglePrice,
  updateSinglePrice
} = require("../src/stripe/prices");

const express = require("express");

const router = express.Router();

router.route("/").get(getAllPrices).post(createSinglePrice);
router.route("/:id").patch(updateSinglePrice);

module.exports = router;
