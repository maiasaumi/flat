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
  methods: {
    handleClick: function(row) {
      console.log(row);
    },
  },
};
</script>

<style></style>
