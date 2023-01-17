<template>
  <div>
    <div
      class="dropdown-menu p-2"
      style="
        min-width: 350px;
        right: 0;
        left: auto;
        overflow: scroll;
        height: 519px;
      "
      aria-labelledby="dropdownMenuButton1"
    >
      <h4 class="text-center mb-4">My Cart</h4>
      <div v-for="item in carts" :key="item.id">
        <div class="ml-5 d-flex justify-content-between">
          <div>
            <strong> {{ item.title }}</strong>
            <br />Quantity: {{ item.quantity }} <br />Price: {{ item.price }}
          </div>
          <div>
            <a href="#" class="text-decoration-none text-danger" @click="removeProductFromCart(item.id)"
              ><i class="fa-solid fa-xmark"></i
            ></a>
          </div>
        </div>
        <hr />
      </div>
      <div class="btn btn-success" @click="checkUser">
      Checkout
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    //get all carts from store
    carts() {
      return this.$store.state.carts;
    },
  },
  methods:{
    removeProductFromCart(product){
      this.$store.dispatch("removeProductFromCart", product)
    },
    checkUser(){
      const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user || !user.token) {
      this.$router.push({ name: "login" });
    }
    else{
      this.$swal.fire("success!", "checkout done", "success");
    }
    }
  }
};
</script>

<style lang="scss" scoped></style>
