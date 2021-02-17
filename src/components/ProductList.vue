<template>
  <v-container fluid grid-list-md>
    <v-data-table
      v-bind:headers="headers"
      :items="allProperties"
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
        value: "name",
      },
      {
        text: "Address",
        value: "metadata.address",
      },
      {
        text: "Image",
        value: "images[0]",
      },
    ],
  }),
  computed: {
    allProperties: function() {
      return this.$store.state.allProperties;
    },
  },
  methods: {
    handleClick: function(row) {
      this.$store.dispatch("setSelectedProduct", row);
      this.$store.dispatch("setShowDetailed", true);
    },
  },
};
</script>

<style></style>
