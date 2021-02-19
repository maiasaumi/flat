import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProperties: [],
    allCustomers: [],
    productPrices: [],
    productsView: true,
    mainView: "Product",
    sideNav: false,
    selectedProduct: {},
    selectedCustomer: {},
    newCustomer: false,
    showDetailed: false,
    addProductView: false
  },
  mutations: {
    setAllProperties(state, properties) {
      state.allProperties = properties;
    },
    changeProductView(state) {
      state.productsView = !state.productsView;
    },
    setMainView(state, view) {
      state.mainView = view;
    },
    setSideNav(state) {
      state.sideNav = !state.sideNav;
    },
    setSelectedCustomer(state, customer) {
      state.selectedCustomer = customer;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    setNewCustomer(state, value) {
      state.newCustomer = value;
    },
    setShowDetailed(state, value) {
      state.showDetailed = value;
    },
    addProductView(state) {
      state.addProductView = !state.addProductView;
    },
    setAllCustomers(state, customers) {
      state.allCustomers = customers;
    },
    setProductPrices(state, prices) {
      state.productPrices = prices;
    }
  },
  actions: {
    getAllProperties: async ({ commit }) => {
      const products = await axios.get("/api/products");
      console.log(products.data.data);
      commit("setAllProperties", products.data.data);
    },
    getAllCustomers: async ({ commit }) => {
      const customers = await axios.get("/api/customers");
      commit("setAllCustomers", customers.data.data);
    },
    getAllPrices: async ({ commit }, id) => {
      const prices = await axios.get(`/api/prices/?product=${id}`);
      commit("setProductPrices", prices);
    },
    createProperty: async ({ commit, dispatch }, property) => {
      console.log(property);
      await axios
        .post("/api/products", property)
        .then(res => {
          console.log(res);
          commit("setSelectedProduct", res.data);
          dispatch("getAllProperties");
          console.log(res.data);
        })
        .catch(err => console.error(err));
    },
    createCustomer: async ({ commit, dispatch }, customer) => {
      await axios
        .post("/api/customers", customer)
        .then(res => {
          commit("setSelectedCustomer", {});
          dispatch("getAllCustomers");
          console.log(res.data);
        })
        .catch(err => console.error(err));
    },
    toggleProductsView: ({ commit }) => {
      commit("changeProductView");
    },
    setView: ({ commit }, view) => {
      commit("setMainView", view);
    },
    setSelectedCustomer: ({ commit }, customer) => {
      commit("setSelectedCustomer", customer);
    },
    setSelectedProduct: ({ commit }, product) => {
      commit("setSelectedProduct", product);
    },
    setNewCustomer: ({ commit }, value) => {
      commit("setNewCustomer", value);
    },
    setShowDetailed: ({ commit }, value) => {
      commit("setShowDetailed", value);
    },
    addProductView: ({ commit }) => {
      commit("addProductView");
    },
    deleteCustomer: async ({ commit, dispatch }, customers) => {
      Promise.all(
        customers.map(async customer => {
          await axios.delete(`/api/customers/${customer.id}`);
        })
      ).then(values => {
        console.log(values);
        commit("setSelectedCustomer", {});
        dispatch("getAllCustomers");
      });
    },
    deleteProduct: async ({ dispatch }, products) => {
      Promise.all(
        products.map(async product => {
          await axios.delete(`/api/products/${product.id}`);
        })
      ).then(values => {
        console.log(values);
        dispatch("getAllProperties");
      });
    },
    setSideNav: ({ commit }) => {
      commit("setSideNav");
    }
  },
  getters: {
    getSelectedCustomer: state => {
      return state.selectedCustomer;
    }
  }
});
