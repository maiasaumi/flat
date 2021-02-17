<template>
  <v-container>
    <v-layout row wrap>
      <v-flex v-for="product in products" :key="product.address">
        <v-card
          max-width="300px"
          max-height="300px"
          class="mr-3 ml-3 mb-3 mt-3"
          hover
        >
          <v-img :src="product.img"></v-img>
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
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
      {
        property_name: "Terrace House",
        address: "6348 sdhjfglas st.",
        img:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nreionline.com%2Fsites%2Fnreionline.com%2Ffiles%2Fuploads%2F2017%2F03%2Fgarden-apartment-77010.jpg&f=1&nofb=1",
      },
    ],
  }),
};
</script>

<style></style>
