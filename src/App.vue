<template>
  <v-app>
    <v-app-bar app dark clipped-left>
      <h1>FLAT.</h1>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="handleNav"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer :value="sideNav" app clipped dark>
      <v-list>
        <v-list-item link @click="toggleProduct">
          Products
        </v-list-item>
        <v-list-item link @click="toggleCustomer">
          Customers
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
    Customers
  },

  data: () => ({
    //
  }),
  computed: {
    mainView: function() {
      return this.$store.state.mainView;
    },
    sideNav: function() {
      return this.$store.state.sideNav;
    }
  },
  methods: {
    toggleCustomer: function() {
      this.$store.dispatch("setView", "Customer");
    },
    toggleProduct: function() {
      this.$store.dispatch("setView", "Product");
    },
    handleNav: function() {
      this.$store.commit("setSideNav");
    }
  }
};
</script>
