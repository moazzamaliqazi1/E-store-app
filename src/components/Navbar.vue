<template>
  <v-app-bar app style="background-color: white">
    <v-badge>
      <v-img src="1.png" width="30"> </v-img>
    </v-badge>
    <v-toolbar-title class="ml-1">
      <router-link to="/home" style="text-decoration: none" class="link-color"
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
    <form class="search-form d-flex">
      <input
        style="margin-right: 10px; width: 300px"
        class="form-control mr-2"
        type="search"
        v-model="query"
        placeholder="Search"
        aria-label="Search"
      />
      <router-link
        :to="{ name: 'searchproduct', params: { search: query } }"
        style="margin-right: 10px"
      >
        <button class="btn btn-outline-success mr-2" type="submit">
          Search
        </button></router-link
      >
    </form>

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
      <div @click="$event.stopPropagation()">
        <!-- here cart component where all cart placed it`s a dropdown -->
        <cart />
      </div>
    </div>

    <span class="grey--text" style="margin-right: 10px"
      >Hello, <strong>David</strong></span
    >
    <v-avatar size="30" class="ml-4">
      <v-img
        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
      ></v-img>
    </v-avatar>

    <v-btn icon @click.prevent="logout">
      <v-icon x-small color="#41ab55">fa fa-sign-out</v-icon>
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

  methods: {
    //logout functionality
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
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
@media only screen and (max-width: 414px) {
 .search-form{
  display: none;
 }
}
</style>
