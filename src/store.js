import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProperties: [],
    productsView: true,
    mainView: "Product",
    sideNav: false,
    selectedProduct: {},
    selectedCustomer: {},
    newCustomer: false,
    showDetailed: false,
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
  },
  actions: {
    getAllProperties: async ({ commit }) => {
      commit("setAllProperties");
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
  },
});
