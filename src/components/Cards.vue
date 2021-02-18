<template>
  <v-container>
    <v-row row wrap no-gutters>
      <v-col
        xs12
        md6
        v-for="property in allProperties"
        :key="property.id"
        justify="center"
      >
        <v-card class="ma-1 mb-5 card_size" @click="setProduct(property)" hover>
          <div class="image_container">
            <v-img :src="property.images[0]">
              <v-badge
                content="Vacant"
                :color="property.active ? 'green darken-1' : 'red darken-2'"
                class="ml-1"
                tile
              ></v-badge>
            </v-img>
          </div>
          <v-card-title>{{ property.name }}</v-card-title>
          <v-card-subtitle>{{ property.metadata.address }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    allProperties: function() {
      return this.$store.state.allProperties;
    }
  },
  methods: {
    setProduct: function(product) {
      this.$store.dispatch("setSelectedProduct", product);
      this.$store.dispatch("setShowDetailed", true);
    }
  }
};
</script>

<style>
.card_size {
  height: 300px;
  width: 400px;
}

.image_container {
  width: 100%;
  height: 70%;
  overflow: hidden;
  
}

@media only screen and (max-width: 600px) {
  .card_size {
    width: 99%;
    height: auto;
  }
}
</style>
