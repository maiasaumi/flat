<template>
  <v-container fluid grid-list-md>
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
        value: "name",
      },
      {
        text: "Address",
        value: "address",
      },
      {
        text: "Phone",
        value: "phone",
      },
      {
        text: "Email",
        value: "email",
      },
      {
        text: "Currency",
        value: "currency",
      },
      {
        text: "Invoice",
        value: "invoice",
      },
    ],
    customers: [
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null,
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null,
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null,
      },
      {
        name: "John Smith",
        address: "4394 Elm St.",
        phone: "578-2394-2349",
        email: "cc@email.com",
        currency: "Yen",
        invoice: null,
      },
    ],
  }),
};
</script>

<style></style>
