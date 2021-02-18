const chai = require("chai");
const { expect } = chai;

const {
  createPaymentIntent, 
  getPaymentIntent, 
  updatePaymentIntent, 
  cancelPaymentIntent
} = require("../src/stripe/intents");

describe.only("Intents", () => {
  describe("createPaymentIntent", () => {
    it("should create a payment intent", async () => {
      await createPaymentIntent().then((res) => {
        expect(res.currency).to.equal("jpy");
        expect(res.amount).to.equal(1000);
        expect(res).to.have.property("client_secret");
      });
    });
  });
  describe("getPaymentIntent", () => {
    it("should get a payment intent", async () => {
      await getPaymentIntent("pi_GCkBBXUs0sZgjsc").then((res) => {
        expect(res.object).to.equal('payment_intent');
        expect(res.status).to.equal('requires_payment_method');
      });
    });
  });

  describe("updatePaymentIntent", () => {
    it("should update payment intent", async () => {
      await updatePaymentIntent("pi_GCkBBXUs0sZgjsc", 2000, "jpy").then((res) => {
        console.log("1: ", res)
        expect(res.amount).to.equal(2000);
        expect(res.currency).to.equal('jpy');
      });
    });
  });

  describe("cancelPaymentIntent", () => {
    it("should cancel payment intent", async () => {
      const id = "pi_GCkBBXUs0sZgjsc";
      await cancelPaymentIntent(id).then((res) => {
        console.log(res)
        expect(res.id).to.equal(id);
      });
    });
  });
});
