<template>
  <v-container fluid grid-list-md>
    <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      :items="allProperties"
      @click:row="handleClick"
      show-select
    >
    </v-data-table>
    <v-row justify="end" class="ma-1">
      <v-btn @click="deleteProduct" dark>delete product</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Name",
        value: "name"
      },
      {
        text: "Address",
        value: "metadata.address"
      },
      {
        text: "Owner",
        value: "metadata.owner"
      },
      {
        text: "Vacant",
        value: "active"
      }
    ],
    selected: []
  }),
  computed: {
    allProperties: function() {
      return this.$store.state.allProperties;
    }
  },
  methods: {
    handleClick: function(row) {
      this.$store.dispatch("setSelectedProduct", row);
      this.$store.dispatch("setShowDetailed", true);
    },
    deleteProduct: function() {
      this.$store.dispatch("deleteProduct", this.selected);
    }
  }
};
</script>

<style></style>
