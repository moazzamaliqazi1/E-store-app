<template>
  <div>
    
    <div class="container-fluid">
      <div class="container">
        <!-- Title -->
        <div
          class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row mt-5"
        >
          <h2 class="h5 mb-lg-0">Create a new Product</h2>
        </div>

        <!-- Main content -->
        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4 w-100">
              <div class="card-body">
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
                  class="btn btn-success"
                  v-on:click.prevent="addNewProduct"
                >
                  Add new product
                </button>
              </div>
            </div>
          </div>

          <!-- Right side -->
          <div class="col-lg-4">
            <!-- Status -->

            <!-- Notification settings -->
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="h6">Notification Settings</h3>
                <ul class="list-group list-group-flush mx-n2">
                  <li
                    class="list-group-item px-0 d-flex justify-content-between align-items-start"
                  >
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">News and updates</h6>
                      <small>News about product and feature updates.</small>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </li>
                  <li
                    class="list-group-item px-0 d-flex justify-content-between align-items-start"
                  >
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">Tips and tutorials</h6>
                      <small>Tips on getting more out of the platform.</small>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked=""
                      />
                    </div>
                  </li>
                  <li
                    class="list-group-item px-0 d-flex justify-content-between align-items-start"
                  >
                    <div class="ms-2 me-auto">
                      <h6 class="mb-0">User Research</h6>
                      <small>Get involved in our beta testing program.</small>
                    </div>
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </li>
                </ul>
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
    async addNewProduct() {
      console.log(this.addProduct);
      const result = await axios.post("https://dummyjson.com/products/add", {
        pTitle: this.addProduct.pTitle,
        pDesc: this.addProduct.pDesc,
        pPrice: this.addProduct.pPrice,
        pthumbnail: this.addProduct.pthumbnail,
      });
      if (result.status == 200) {
        console.log("result", result);

        this.$router.push({ name: "home" });
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
