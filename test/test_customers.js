const chai = require("chai");
const { expect } = chai;

const {
  getAllCustomers,
  createSingleCustomer,
  updateSingleCustomer,
  deleteSingleCustomer,
} = require("../src/stripe/customers");

describe("Customers", () => {
  describe("getAllCustomers", () => {
    it("should return a list of customers", async () => {
      await getAllCustomers().then((res) => {
        expect(res.data).to.be.an("array");
      });
    });
  });

  describe("createSingleCustomer", () => {
    it("should return a created customer", async () => {
      await createSingleCustomer("Sachi", "description").then((res) => {
        expect(res.name).to.equal("Sachi");
      });
    });
  });

  describe("updateSingleCustomer", () => {
    it("should update and return a single customer", async () => {
      await updateSingleCustomer("19862", "Pochi", "Pochidesc").then((res) => {
        expect(res.name).to.equal("Pochi");
      });
    });
  });

  describe("deleteSingleCustomer", () => {
    it("should delete and return undefiend", async () => {
      await deleteSingleCustomer("cus_IRnOTRkbVDSo6Q").then((res) => {
        expect(res.name).to.equal(undefined);
      });
    });
  });
});
