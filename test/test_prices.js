const chai = require("chai");
const { expect } = chai;

const {
  getAllPrices,
  createSinglePrice,
  updateSinglePrice,
} = require("../src/stripe/prices");

describe("Prices", () => {
  describe("getAllPrices", () => {
    it("should return a list of products", async () => {
      await getAllPrices().then((res) => {
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("createSinglePrice", () => {
    it("should return a created price", async () => {
      await createSinglePrice("Sassa", true, "jpy", "prod_HKLOUVloFKQALy").then(
        (res) => {
          expect(res.nickname).to.equal("Sassa");
        }
      );
    });
  });

  describe("updateSinglePrice", () => {
    it("should update and return a single price", async () => {
      await updateSinglePrice(
        "price_1HqtnxE5rrbCJ30iplebsXL2",
        "Poppo",
        false
      ).then((res) => {
        expect(res.active).to.equal(false);
      });
    });
  });
});
