<template>
  <div>
    <!-- ....Navbar.... -->
    <Navbar />
    <!-- below key means don't need refresh again when login  -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- footer -->
    <footerComponent />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import footerComponent from "./components/footerComponent.vue";
export default {
  name: "App",

  data: () => ({}),
  components: {
    Navbar,
    footerComponent,
  },
  //if user is not exist in localstorage system will nevigate to login page
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user "));
    console.log(user);
    if (!user || !user.token) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
