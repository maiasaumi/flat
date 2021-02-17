import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProperties: [],
    productsView: true,
    mainView: "Product",
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
  },
});
