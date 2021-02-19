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
              v-model="name"
              :value="selectedCustomer.name ? selectedCustomer.name : ''"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="address"
              v-model="address"
              :value="
                selectedCustomer.address ? selectedCustomer.address.line1 : ''
              "
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="phone"
              v-model="phone"
              :value="selectedCustomer.phone ? selectedCustomer.phone : ''"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="currency"
              :value="
                selectedCustomer.currency ? selectedCustomer.currency : ''
              "
              label="currency"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              label="email"
              v-model="email"
              :value="selectedCustomer ? selectedCustomer.email : ''"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn dark class="mr-3" @click="createCustomer">Save</v-btn>
          <v-btn @click="closeForm">Close</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      :items="allCustomers"
      item-key="name"
      @click:row="handleClick"
      show-select
    >
    </v-data-table>
    <v-row justify="end">
      <v-btn class="ma-5" dark @click="deleteCustomer">
        Delete Customer
      </v-btn>
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
        value: "address.line1"
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
        value: "invoice_prefix"
      }
    ],
    name: "",
    address: "",
    phone: "",
    email: "",
    currency: "",
    invoice_prefix: "",
    selected: []
  }),
  computed: {
    selectedCustomer: function() {
      return this.$store.state.selectedCustomer;
    },
    newCustomer: function() {
      return this.$store.state.newCustomer;
    },
    allCustomers: function() {
      return this.$store.state.allCustomers;
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
    },
    createCustomer: function() {
      const customer = {
        name: this.name,
        address: {
          line1: this.address
        },
        phone: this.phone,
        email: this.email
      };
      this.$store.dispatch("createCustomer", customer);
    },
    deleteCustomer: function() {
      this.$store.dispatch("deleteCustomer", this.selected);
      this.$store.dispatch("setSelectedCustomer", {});
    }
  }
};
</script>

<style></style>
