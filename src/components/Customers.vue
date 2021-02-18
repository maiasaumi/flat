<template>
  <v-container fluid>
    <v-row class="text-center" justify="end">
      <v-btn dark class="ma-3" @click="addCustomer">Add Customer</v-btn>
    </v-row>
    <v-form v-if="selectedCustomer.name || newCustomer">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              label="Name"
              :value="selectedCustomer.name"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="address"
              :value="selectedCustomer.address"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="phone"
              :value="selectedCustomer.phone"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="currency"
              label="currency"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="email"
              :value="selectedCustomer.email"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn dark class="mr-3">Save</v-btn>
          <v-btn @click="closeForm">Close</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <v-data-table
      v-bind:headers="headers"
      :items="customers"
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
        value: "name"
      },
      {
        text: "Address",
        value: "address"
      },
      {
        text: "Phone",
        value: "phone"
      },
      {
        text: "Email",
        value: "email"
      },
      {
        text: "Currency",
        value: "currency"
      },
      {
        text: "Invoice",
        value: "invoice"
      }
    ],
    customers: [
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null
      }
    ]
  }),
  computed: {
    selectedCustomer: function() {
      return this.$store.state.selectedCustomer;
    },
    newCustomer: function() {
      return this.$store.state.newCustomer;
    }
  },
  methods: {
    handleClick: function(row) {
      this.$store.dispatch("setSelectedCustomer", row);
    },
    addCustomer: function() {
      this.$store.dispatch("setNewCustomer", true);
    },
    closeForm: function() {
      this.$store.dispatch("setSelectedCustomer", {});
      this.$store.dispatch("setNewCustomer", false);
    }
  }
};
</script>

<style></style>
