<template>
  <!-- <v-app>
   

    <v-main> -->
      <div>
      <Navbar />
      <router-view></router-view>
    </div>
    <!-- </v-main>
  </v-app> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Navbar
    
  },
  created(){
    
  const user = JSON.parse(localStorage.getItem("user "));
  if (!user || !user.token) {
    this.$router.push({ name: "login" });
  } 

  }
};
</script>
<style>
a{
  text-decoration: none;
}
</style>