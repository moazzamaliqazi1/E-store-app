<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <!-- Main content -->
        <div class="row">
          <div class="col-lg-12">
            <div class="card w-100 h-100">
              <div class="card-body mt-2">
                <h3 class="text-center">Add Your Product</h3>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">product Title</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="addProduct.pTitle"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Product Description</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="addProduct.pDesc"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Price</label>
                      <input
                        type="number"
                        class="form-control price-input"
                        v-model="addProduct.pPrice"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Product Image</label>
                      <input
                        class="form-control"
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        v-on:change="addProduct.pthumbnail"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-success mt-5"
                  v-on:click.prevent="addNewProduct"
                >
                  Add new product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addProduct",

  data() {
    return {
      addProduct: {
        pTitle: "",
        pDesc: "",
        pPrice: "",
        pthumbnail: "",
      },
    };
  },
  methods: {
    //add the new product for sale 
    async addNewProduct() {
      console.log(this.addProduct);
      const result = await axios.post("https://dummyjson.com/products/add", {
        //push all the values in api its just dummy api we'll get just response 
        pTitle: this.addProduct.pTitle,
        pDesc: this.addProduct.pDesc,
        pPrice: this.addProduct.pPrice,
        pthumbnail: this.addProduct.pthumbnail,
      });
      if (result.status == 200) {
        console.log("result", result);
        this.$swal.fire("success!", "product added ", "success");
        // this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.5rem 1.5rem;
}
.price-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
