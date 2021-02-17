<template>
  <v-app>
    <v-app-bar app dark>
      <h1>Flat</h1>
      <v-spacer></v-spacer>
      <v-btn light class="mr-3">Product List</v-btn>
      <v-btn light>Customer List</v-btn>
    </v-app-bar>
    <v-main>
      <Products />
    </v-main>
  </v-app>
</template>

<script>
import Products from "./components/Products";
export default {
  name: "App",

  components: {
    Products,
  },

  data: () => ({
    //
  }),
};
</script>
