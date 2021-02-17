<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        md6
        v-for="property in allProperties"
        :key="property.id"
        justify="center"
        @click="setProduct(property)"
      >
        <v-card
          min-width="360px"
          max-width="400"
          max-height="350px"
          class="mr-1 ml-1 mb-1 mt-1"
          hover
        >
          <v-img :src="property.images[0]">
            <v-badge
              content="Vacant"
              :color="property.active ? 'green darken-1' : 'red darken-2'"
              class="ml-1"
              tile
            ></v-badge>
          </v-img>
          <v-card-title>{{ property.name }}</v-card-title>
          <v-card-subtitle>{{ property.metadata.address }}</v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    allProperties: function() {
      return this.$store.state.allProperties;
    },
  },
  methods: {
    setProduct: function(product) {
      this.$store.dispatch("setSelectedProduct", product);
      this.$store.dispatch("setShowDetailed", true);
    },
  },
};
</script>

<style></style>
