const chai = require("chai");
const { expect } = chai;

const {
  createPaymentIntent
} = require("../src/stripe/intents");

describe.only("Intents", () => {
  describe("createPaymentIntent", () => {
    it("should create a payment intent", async () => {
      await createPaymentIntent(1000, "jpy").then((res) => {
        expect(res.currency).to.equal("jpy");
        expect(res.amount).to.equal(1000);
        expect(res).to.have.property("client_secret");
      });
    });
  });
});
