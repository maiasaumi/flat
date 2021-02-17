<template>
  <v-app>
    <v-app-bar app dark>
      <h1>FLAT.</h1>
      <v-spacer></v-spacer>
      <v-btn light class="mr-3" @click="toggleProduct">Product List</v-btn>
      <v-btn light @click="toggleCustomer">Customer List</v-btn>
    </v-app-bar>
    <v-main>
      <Products v-if="mainView === 'Product'" />
      <Customers v-else />
    </v-main>
  </v-app>
</template>

<script>
import Products from "./components/Products";
import Customers from "./components/Customers";
export default {
  name: "App",

  components: {
    Products,
    Customers,
  },

  data: () => ({
    //
  }),
  computed: {
    mainView: function() {
      return this.$store.state.mainView;
    },
  },
  methods: {
    toggleCustomer: function() {
      this.$store.dispatch("setView", "Customer");
    },
    toggleProduct: function() {
      this.$store.dispatch("setView", "Product");
    },
  },
};
</script>
