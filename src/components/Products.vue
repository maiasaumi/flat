<template>
  <v-container fluid>
    <v-overlay :value="showDetailed">
      <v-container fluid>
        <v-card light class="pl-5 cardSize">
          <v-row justify="center">
            <v-card-title>{{ selectedProduct.name }}</v-card-title>
          </v-row>
          <v-row>
            <!-- <div class="image">
              <v-img
                :src="selectedProduct.images ? selectedProduct.images[0] : ''"
              ></v-img>
            </div>
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
            </div> -->
            <!-- <ul>
              <li
                v-for="utility in selectedProduct.metadata.utilities"
                :key="utility"
              >
                <p>{{ utility }}</p>
              </li>
            </ul> -->
          </v-row>
          <v-row>
            <v-btn @click="handleOverlayClose" dark class="mb-5">Close</v-btn>
          </v-row>
        </v-card>
      </v-container>
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
          <v-textarea label="description" v-model="description"></v-textarea>
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
      <Cards v-if="!productsView" />
      <ProductList v-else />
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
        metadata: {
          owner: this.owner,
          address: this.address
        }
      };
      console.log(property);
      this.$store.dispatch("createProperty", property);
      // axios
      //   .post("http://localhost:9000/api/products", property)
      //   .then(res => {
      //     this.$store.dispatch("getAllProperties");
      //     console.log(res.data.data);
      //   })
      //   .catch(err => console.error(err));
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
  margin: 10px;
  margin-right: 10px;
}
.cardSize {
  width: 70vw;
  height: 60vh;
}
@media only screen and (max-width: 600px) {
  .image {
    width: 92%;
  }
  .cardSize {
    width: 95vw;
    height: auto;
  }
}
</style>
