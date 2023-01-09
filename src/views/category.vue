<template>
  <div>
    
    <div class="container mb-5">
      <div class="row justify-content-center gap-2" >
        <div
          class="card col-3 w-50"
          v-for="product in category.products"
          :key="product.id"
        >
          <div class="">
            <v-img
              :src="product.thumbnail"
              max-height="100"
              max-width="100"
              contain
            ></v-img>
            <div
              class="d-flex justify-content-between align-items-center mt-3 px-2"
            >
              <h4>{{ product.title }}</h4>
              <span class="heart"><i class="fa fa-heart"></i></span>
            </div>
            <div class="mt-2 px-2">
              <small>{{ product.description }}</small>
            </div>
            <div class="px-2">
              <h5>${{ product.price }}</h5>
            </div>
            <div class="mt-2 px-2">
              <small>Rating : {{ product.rating }}</small>
            </div>
            <div class="px-2 mt-3">
                <button class="btn btn-success px-3"> <router-link  :to="{name: 'productDetail' , params: {id:product.id}}" class="detail-btn">Detail</router-link></button>
              <button class="btn btn-outline-success px-3" style="margin-left: 10px;" >Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "category",
 
  data() {
    return {
      category: {
        products: [],
      },
      cat: this.$route.params.cat,
    };
  },

  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      await axios
        .get(`https://dummyjson.com/products/category/${this.cat}`)
        .then((response) => {
          console.log(response.data);
          this.category = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.container{
    margin-top: 60px!important;
}
.card {
  width: 255px;
  
}

.inner-card {
  background: #fff;
  padding: 10px;
  border-radius: 5px;
}

.heart {
  cursor: pointer;
  height: 35px;
  width: 35px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #beb4aa;
  border-radius: 50%;
  background-color: #eee;
}

.btn:focus {
  color: #fff;
  background-color: #025ce2;
  border-color: #0257d5;
  box-shadow: none;
}
.detail-btn{
    color: white;
}
.detail-btn:hover{
    color: white;
}
</style>
