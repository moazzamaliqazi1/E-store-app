<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
      <v-card class=" rounded-xl d-flex flex-column justify-content-center" max-width="300" style="height:300px;" >
        <div align="center" justify="center">
          <v-img
            :src="product.thumbnail"
            max-height="100"
            max-width="100"
            contain
          ></v-img>
        </div>
        <v-card-title
          ><router-link
            :to="{ name: 'productDetail', params: { id: product.id } }"
            style="color: black"
            >{{ product.title }}</router-link
          ></v-card-title
        >
        <v-card-title class="gery--text caption mt-n6" style="height:90px">{{
          product.description
        }}</v-card-title>
        <v-card-title class="mt-n4">${{ product.price }}</v-card-title>
        
        
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["product"],

  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style></style>
