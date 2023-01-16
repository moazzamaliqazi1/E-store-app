<template>
  <div>
    <!-- ............................. -->
    <div class="container mb-5">
      <div class="row justify-content-center gap-2">
        <div class="card col-3 w-50" v-for="item in items" :key="item.id">
          <div class="">
            <v-img
              :src="item.thumbnail"
              max-height="100"
              max-width="100"
              contain
            ></v-img>
            <div
              class="d-flex justify-content-between align-items-center mt-3 px-2"
            >
              <h4>{{ item.title }}</h4>
              <span class="heart"><i class="fa fa-heart"></i></span>
            </div>
            <div class="mt-2 px-2">
              <small>{{ item.description }}</small>
            </div>
            <div class="px-2">
              <h5>${{ item.price }}</h5>
            </div>
            <div class="mt-2 px-2">
              <small>Rating : {{ item.rating }}</small>
            </div>
            <div class="px-2 mt-3">
              <button class="btn btn-success px-3">
                <router-link
                  :to="{ name: 'productDetail', params: { id: item.id } }"
                  class="detail-btn"
                  >Detail</router-link
                >
              </button>
              <button
                class="btn btn-outline-success px-3"
                style="margin-left: 10px"
              >
                Add to cart
              </button>
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
  name: "searchProduct",
  data() {
    return {
      items: [],

      query: null,
    };
  },

  created() {
    this.query = this.$route.params.search;
    // check te params
    // console.log(this.query);
  },
  mounted() {
    //without refreshing searching can done again and again
    this.$watch(() => {
      this.query = this.$route.params.search;
      this.getData();
    });
  },

  methods: {
    async getData() {
      await axios
      //query variable passes here with search value by params and put it in api for searching
        .get(`https://dummyjson.com/products/search?q=${this.query}`)
        .then((response) => {
          this.items = response.data.products;
          console.log(this.items);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.card-product-list,
.card-product-grid {
  margin-bottom: 0;
}
.card {
  width: 500px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.1rem;
  margin-top: 50px;
}
.card-product-grid:hover {
  -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
  box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.card-product-grid .img-wrap {
  border-radius: 0.2rem 0.2rem 0 0;
  height: 220px;
}
.card .img-wrap {
  overflow: hidden;
}
.card-lg .img-wrap {
  height: 280px;
}
.card-product-grid .img-wrap {
  border-radius: 0.2rem 0.2rem 0 0;
  height: 275px;
  padding: 16px;
}
[class*="card-product"] .img-wrap img {
  height: 100%;
  max-width: 100%;
  width: auto;
  display: inline-block;
  -o-object-fit: cover;
  object-fit: cover;
}
.img-wrap {
  text-align: center;
  display: block;
}
.card-product-grid .info-wrap {
  overflow: hidden;
  padding: 18px 20px;
}
[class*="card-product"] a.title {
  color: #212529;
  display: block;
}
.rating-stars {
  display: inline-block;
  vertical-align: middle;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  white-space: nowrap;
  clear: both;
}
.rating-stars li.stars-active {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.rating-stars li {
  display: block;
  text-overflow: clip;
  white-space: nowrap;
  z-index: 1;
}
.card-product-grid .bottom-wrap {
  padding: 18px;
  border-top: 1px solid #e4e4e4;
}
.btn {
  display: inline-block;
  font-weight: 600;
  color: #343a40;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.45rem 0.85rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
.btn-primary {
  color: #fff;
  background-color: #3167eb;
  border-color: #3167eb;
}
.fa {
  color: #ff5722;
}

</style>
