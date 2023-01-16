<template>
  <div>
    <!-- drawer init and toggle -->

    <button
      class="height text-white w-100 bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
      type="button"
      data-drawer-target="drawer-example"
      data-drawer-show="drawer-example"
      aria-controls="drawer-example"
    >
      View Categories
    </button>

    <!-- drawer component -->
    <div 
      id="drawer-example"
      class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full"
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        
      </button>
      <h4 class="text-2xl font-bold dark:text-white text-center">
        All Categories
      </h4>

      <div
        class="grid grid-cols-1 gap-3 mt-5"
        v-for="category in categories"
        :key="category"
      >
        <router-link
          style="text-decoration: none"
          :to="{ name: 'categoryPage', params: { cat: category } }"
          class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          {{ category }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
  data(){
    return{
      show:false
    }
  },
  computed: {
    categories() {
      // get all categories from store
      return this.$store.state.categories;
    },
  },
  mounted() {
    //dispatch action for all categories
    this.$store.dispatch("getCategories");
  },
};
</script>

<style>
.height {
  height: 50px;
}
</style>
