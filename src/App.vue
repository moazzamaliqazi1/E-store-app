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
 
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
