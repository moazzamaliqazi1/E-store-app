<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <!-- homepage banner/image -->
          <v-card class="mx-auto rounded-xl" flat>
            <v-img src="d2.png" max-height="100%" max-width="100%">
              <v-card-title class="top ml-10">
                <h2 class="title1 white--text">Everyone</h2>
              </v-card-title>
              <v-card-title class="top ml-10 mt-n8">
                <h2 class="title2 white--text">Loves Shop</h2>
              </v-card-title>
              <v-card-text class="ml-10">
                <h3 class="black--text">#Free Delivery</h3>
              </v-card-text>
              <v-card-text class="ml-10">
                <v-row class="mt-2">
                  <v-col cols="4">
                    <v-text-field
                      label="Search "
                      class="d-none d-sm-none d-md-flex"
                      filled
                      solo
                      prepend-inner-icon="mdi-magnify"
                      flat
                      rounded
                      success
                      v-model="query"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="2" class="marginLeft">
                    <router-link
        :to="{ name: 'searchproduct', params: { search: query } }"
        style="margin-right: 10px"
      >
                    <v-btn
                      color="#157347"
                      rounded
                      dark
                      x-large
                      class="py-7 d-none d-sm-none d-md-flex"
                      >search</v-btn
                    >
                  </router-link>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>

          <!-- ......................... -->
          <!-- category component -->
          <!--remember... transition add end will add  -->
          <div style="margin-left: 388px" class="mt-5">
            <allCategories />
          </div>

          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Popular Products</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn rounded color="#157347" dark class="px-8">See All</v-btn>
          </v-toolbar>
          <!-- product component -->
          <Product />
        </v-col>
      </v-row>
    </v-container>
   
  </v-app>
</template>

<script>
import Product from "../components/Product.vue";
import allCategories from "../components/allCategories.vue";


export default {
  name: "Home",
  data: () => ({
    toggle_exclusive: 1,
    query: null,
  }),

  components: {
    Product,
    allCategories,
    
  },
};
</script>
<style>
.marginLeft {
  margin-left: -90px;
}
.mtop {
  margin-top: 100px;
}
.mbottom {
  margin-bottom: 100px;
}
.v-card.borderme {
  border: 2px solid green !important;
}
.v-card.borderout {
  border: 1px solid #d5f0db !important;
}
.v-btn:not(.v-btn--round).v-size--default.add {
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile {
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px) {
  h2.title1 {
    font-size: 15px;
  }
  h2.title2 {
    font-size: 15px;
  }
  .top {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 600px) {
  .top {
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    margin-top: 120px;
  }
}
</style>
