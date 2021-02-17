<template>
  <v-container fluid>
    <v-row class="text-center" justify="end">
      <v-switch
        value="List"
        false-value="Cards"
        label="Switch View"
        class="mr-3"
        @click="toggleView"
      ></v-switch>
      <v-btn dark class="mt-3 ml-3 mr-3" @click="handleClick"
        >Add Product</v-btn
      >
    </v-row>
    <v-row>
      <Cards v-if="!productsView" />
      <ProductList v-else />
    </v-row>
  </v-container>
</template>

<script>
import Cards from "./Cards";
import ProductList from "./ProductList";

export default {
  name: "Products",
  components: {
    ProductList,
    Cards,
  },
  data: () => ({}),
  computed: {
    productsView: function() {
      return this.$store.state.productsView;
    },
  },
  methods: {
    toggleView: function() {
      this.$store.dispatch("toggleProductsView");
    },
    handleClick: function() {
      this.$store.dispatch("handleClick");
    },
  },
};
</script>
