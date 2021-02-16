import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProperties: [],
  },
  mutations: {
    setAllProperties(state, properties) {
      state.allProperties = properties;
    },
  },
  actions: {
    getAllProperties: async ({ commit }) => {
      const allProperties = await axios.get("url");
      commit("setAllProperties", allProperties);
    },
  },
});
