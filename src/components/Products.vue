<template>
  <v-container fluid>
    <v-overlay :value="showDetailed">
      <v-card light class="cardSize d-flex">
        <v-row justify="center" class="mt-5">
          <h1>{{ selectedProduct.name }}</h1>
        </v-row>
        <v-row justify="center" class="ma-5">
          <v-col class="d-flex justify-content-center">
            <div class="image">
              <v-img
                :src="selectedProduct.images ? selectedProduct.images[0] : ''"
              ></v-img>
            </div>
          </v-col>
          <v-divider :vertical="true"></v-divider>
          <v-col>
            <div class="ml-5">
              <p>
                Owner:
                {{
                  selectedProduct.metadata ? selectedProduct.metadata.owner : ""
                }}
              </p>
              <p>
                Address:
                {{
                  selectedProduct.metadata
                    ? selectedProduct.metadata.address
                    : ""
                }}
              </p>
              <p>
                Description:
                {{ selectedProduct ? selectedProduct.description : "" }}
              </p>
            </div>
            <!-- <ul>
              <li
                v-for="utility in selectedProduct.metadata.utilities"
                :key="utility"
              >
                <p>{{ utility }}</p>
              </li>
            </ul> -->
          </v-col>
        </v-row>
        <v-row justify="end" class="mr-8 mb-2">
          <v-btn @click="handleOverlayClose" dark class="mb-5">Close</v-btn>
        </v-row>
      </v-card>
    </v-overlay>
    <v-row justify="end">
      <v-switch
        value="List"
        false-value="Cards"
        label="Switch View"
        class="mr-3"
        @click="toggleView"
      ></v-switch>
      <v-btn dark class="mt-3 ml-3 mr-3" @click="handleClick"
        >Add Product</v-btn
      >
    </v-row>
    <v-form v-if="addProductView">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              label="property name"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="address"
              label="address"
              Required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-textarea
            label="description"
            v-model="description"
            class="pa-3"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="image"
              label="image url"
              Required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="owner" label="owner" Required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch v-model="active" label="vacant" Required></v-switch>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn dark class="mr-3" @click="addProduct">Save</v-btn>
          <v-btn @click="handleClick">Close</v-btn>
        </v-row>
      </v-container>
    </v-form>
    <v-row>
      <v-container fluid>
        <Cards v-if="productsView" />
        <ProductList v-else />
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import Cards from "./Cards";
import ProductList from "./ProductList";
// import axios from "axios";

export default {
  name: "Products",
  components: {
    ProductList,
    Cards
  },
  data: () => ({
    name: "",
    description: "",
    image: "",
    active: false,
    owner: "",
    address: ""
  }),
  computed: {
    productsView: function() {
      return this.$store.state.productsView;
    },
    showDetailed: function() {
      return this.$store.state.showDetailed;
    },
    selectedProduct: function() {
      return this.$store.state.selectedProduct;
    },
    addProductView: function() {
      return this.$store.state.addProductView;
    }
  },
  methods: {
    toggleView: function() {
      this.$store.dispatch("toggleProductsView");
    },
    handleClick: function() {
      this.$store.dispatch("addProductView");
    },
    handleOverlayClose: function() {
      this.$store.dispatch("setShowDetailed", false);
    },
    addProduct: async function() {
      const property = {
        name: this.name,
        description: this.description,
        active: this.active,
        images: [this.image],
        owner: this.owner,
        address: this.address
      };
      this.$store.dispatch("createProperty", property);
    }
  }
};
</script>

<style scoped>
.image {
  display: flex;
  justify-content: center;
  width: 400px;
  max-width: 500px;
  margin-right: 10px;
}
.cardSize {
  flex-direction: column;
  width: 70vw;
  height: auto;
}
@media only screen and (max-width: 600px) {
  .image {
    width: 100%;
  }
  .cardSize {
    width: 93vw;
    height: auto;
  }
}
</style>
