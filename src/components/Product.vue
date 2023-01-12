<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
      <v-card
        class="rounded-xl d-flex flex-column justify-content-center"
        max-width="300"
        style="height: 300px"
      >
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
        <v-card-title class="gery--text caption mt-n6" style="height: 90px">{{
          product.description
        }}</v-card-title>
        <v-card-title class="mt-n4">${{ product.price }}</v-card-title>
      </v-card>
    </v-col>
    <!-- ................pagination -->
    <pagination
      :totalPages="12"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </v-row>
</template>

<script>
import pagination from "../components/pagination.vue";
export default {
  components:{
    pagination
  },
  data () {
    return {
      currentPage: 1,
      limit:9,
      skip:0
    };
  },
  methods: {
    // pagination function
    onPageChange(page) {
      this.currentPage = page;
      if(page){
        this.skip= this.limit*(page-1)
        this.$store.dispatch("getProducts",[this.limit,this.skip]);
      }
      
      
    }
  },
  props: ["product"],
  //show all productsusing props

  computed: {
    //get all products from store
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    // dispatch an action for get the products
    this.$store.dispatch("getProducts",[this.limit,this.skip]);
  },
};
</script>
<style></style>
