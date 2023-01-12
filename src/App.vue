<template>
  <div>
    <!-- ..................... -->
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",

  data: () => ({}),
  components: {
    Navbar,
  },
  //if user is not exist in localstorage system will nevigate to login page
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user "));
    console.log(user)
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
