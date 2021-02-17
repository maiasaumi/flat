<template>
  <v-container fluid grid-list-md>
    <v-data-table
      v-bind:headers="headers"
      :items="products"
      @click:row="handleClick"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Name",
        value: "property_name",
      },
      {
        text: "Address",
        value: "address",
      },
      {
        text: "Image",
        value: "img",
      },
    ],
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
    handleClick: function(row) {
      this.$store.dispatch("setSelectedProduct", row);
      this.$store.dispatch("setShowDetailed", true);
    },
  },
};
</script>

<style></style>
