<template>
  <v-item-group class="mt-n15">
    <v-container>
      <v-row justify="center" class="space">
        <v-col
          cols="12"
          md="2"
          class="cat-card-height"
          v-for="category in categories"
          :key="category"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? '#d5f0db' : 'white'"
              :class="active ? 'borderme' : 'borderout'"
              class="d-flex aligh-cenetr rounded-lg mx-2"
              dark
              height="100"
              flat
              @click="toggle"
            >
              <v-row>
                <router-link
                  :to="{ name: 'categoryPage', params: { cat: category } }"
                  class="text-decoration-none"
                >
                  <v-col cols="12" sm="12" class="hover-back">
                    <v-list-item class="text-center">
                      <v-list-item-subtitle
                        :class="
                          active
                            ? 'black--text font-weight-bold'
                            : 'black--text'
                        "
                        class="mt-4"
                      >
                        {{ category }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-col>
                </router-link>
              </v-row>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  props: ["category"],
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
.cat-card-height {
  height: 120px;
}
</style>
