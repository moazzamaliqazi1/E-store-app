<template>
  <v-app-bar app style="background-color: white">
    <v-badge>
      <v-img src="1.png" width="30"> </v-img>
    </v-badge>
    <v-toolbar-title class="ml-1">
      <router-link to="/" style="text-decoration: none" class="link-color"
        ><span class="green--text">e</span><strong>Store</strong></router-link
      >
    </v-toolbar-title>

    <v-toolbar-title class="ml-5">
      <router-link
        to="/addproduct"
        style="border-radius: 15px; padding: 8px"
        class="link-color"
      >
        <span class="green--text">Sell on eStore</span></router-link
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-card-text style="width: 55%" class="responsive">
      <v-row class="mt-4">
        <v-col cols="7">
          <v-text-field
            label="Search "
            style="outline: none; border: 0"
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
          >
            <v-btn color="#157347" dark class="mt-2 d-none d-sm-none d-md-flex"
              >search</v-btn
            >
          </router-link>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="dropdown me-2">
      <button
        class="btn btn-success dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i><i class="fa-solid fa-cart-shopping"></i></i>
      </button>
      <!-- cart component  -->
      <div>
        <cart />
      </div>
    </div>

    <v-avatar size="30" class="ml-4">
      <v-img
        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      ></v-img>
    </v-avatar>

    <v-btn icon><router-link to="/login">
      <v-icon x-small color="#41ab55">fa fa-sign-out</v-icon></router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
import cart from "./cart.vue";
export default {
  components: {
    cart,
  },
  data() {
    return {
      query: null,
    };
  },

 
};
</script>

<style>
.vtoolbar__title {
  font-size: 1rem !important;
}
.link-color {
  color: green;
}
.link-color:hover {
  border-bottom: 1px solid green;
}
@media screen and (max-width: 450px) {
  .responsive {
    display: none !important;
  }
}
</style>
