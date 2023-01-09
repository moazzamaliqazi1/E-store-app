<template>
  <div>
    <!-- ........................ -->
    <div class="container mb-5">
      <div class="row justify-content-center gap-2" v-if="product">
        <div class="card col-3 w-75">
          <div class="">
            <v-img
              :src="product.thumbnail"
              max-height="300"
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
              <button
                class="btn btn-success px-3"
                style="background-color: #41ab55"
              >
                Add to cart
              </button>
            </div>
            <h6 class="px-2 mt-3">Related Images</h6>
            <div class="d-flex">
              <v-img
                :src="product.images[0]"
                max-height="100"
                max-width="100"
                contain
              ></v-img>
              <v-img
                :src="product.images[1]"
                max-height="100"
                max-width="100"
                contain
              ></v-img>
              <v-img
                :src="product.images[2]"
                max-height="100"
                max-width="100"
                contain
              ></v-img>
            </div>
            <div class="mt-2 px-2">
              <small>Available Stock : {{ product.stock }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>

<style lang="scss" scoped></style>
