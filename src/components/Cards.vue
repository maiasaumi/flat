<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        md6
        v-for="product in products"
        :key="product.id"
        justify="center"
        @click="setProduct(product)"
      >
        <v-card
          min-width="360px"
          max-width="400"
          max-height="350px"
          class="mr-1 ml-1 mb-1 mt-1"
          hover
        >
          <v-img :src="product.img">
            <v-badge
              content="Vacant"
              :color="product.vacant ? 'green darken-1' : 'red darken-2'"
              class="ml-1"
              tile
            ></v-badge>
          </v-img>
          <v-card-title>{{ product.property_name }}</v-card-title>
          <v-card-subtitle>{{ product.address }}</v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        id: 1,
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: true,
      },
      {
        id: 2,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: true,
      },
      {
        id: 3,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: false,
      },
      {
        id: 4,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: true,
      },
      {
        id: 5,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: false,
      },
      {
        id: 6,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: false,
      },
      {
        id: 7,

        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
        vacant: true,
      },
    ],
  }),
  methods: {
    setProduct: function(product) {
      this.$store.dispatch("setSelectedProduct", product);
      this.$store.dispatch("setShowDetailed", true);
    },
  },
};
</script>

<style></style>
