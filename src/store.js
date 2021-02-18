import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProperties: [
      {
        id: 1,
        name: "Terrace Villa",
        active: true,
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjorgefontan.com%2Fwp-content%2Fuploads%2F2018%2F09%2FNYC-Apartment-Renovation-Law.jpg&f=1&nofb=1",
        ],
        metadata: {
          owner: "John",
          address: "435983 South North St.",
          utilities: ["Tokyo Gas", "Tokyo Electric", "Main Water"],
        },
      },
      {
        id: 2,
        name: "Terrace Villa",
        active: true,
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        ],
        metadata: {
          owner: "John",
          address: "435983 South North St.",
          utilities: ["Tokyo Gas", "Tokyo Electric", "Main Water"],
        },
      },
      {
        id: 3,
        name: "Terrace Villa",
        active: false,
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        ],
        metadata: {
          owner: "John",
          address: "435983 South North St.",
          utilities: ["Tokyo Gas", "Tokyo Electric", "Main Water"],
        },
      },
      {
        id: 4,
        name: "Terrace Villa",
        active: true,
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        ],
        metadata: {
          owner: "John",
          address: "435983 South North St.",
          utilities: ["Tokyo Gas", "Tokyo Electric", "Main Water"],
        },
      },
      {
        id: 5,
        name: "Terrace Villa",
        active: false,
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        ],
        metadata: {
          owner: "John",
          address: "435983 South North St.",
          utilities: ["Tokyo Gas", "Tokyo Electric", "Main Water"],
        },
      },
    ],
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
      const products = await axios.get("http://localhost:9000/api/products");
      console.log(products);
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
