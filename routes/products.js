const {
  getAllProducts,
  getSingleProduct,
  createSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
} = require("../src/stripe/products");

const express = require("express");

const router = express.Router();

router.route("/").get(getAllProducts).post(createSingleProduct);
router.route("/:id").get(getSingleProduct).patch(updateSingleProduct).delete(deleteSingleProduct);

module.exports = router;
