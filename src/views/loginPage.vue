<template>
  <div>
    <div class="row mt-5">
      <div class="col-sm-6 col-md-4">
        For Login<br />
        username: kminchelle<br />
        password: 0lelplR
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="account-wall">
          <img
            class="profile-img"
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt=""
          />
          <form class="form-signin">
            <input
            
              type="text"
              class="form-control"
              placeholder="Email"
              v-model="username"
              required
              autofocus
            />
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
              required
            />
            <button
              class="btn btn-lg btn-primary btn-block"
              type="submit"
              v-on:click.prevent="login"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          username: this.username,

          password: this.password,
        }),
      });

      const data = await response.json();

      console.log(data.username, data.password);

      if (response.ok) {
        //save use in localstorage
        localStorage.setItem("user", JSON.stringify(data));
        this.$router.push({ path: "/" });

        console.log("successful");
      } else {
        console.log("bad request");
        this.$swal.fire("Error!", "Invalid username or password!", "error");
      }
    },
   
    
  },
};
</script>
<style>
.error {
  color: red;
  text-align: center;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.account-wall {
  margin-top: 20px;
  padding: 40px 0px 20px 0px;
  background-color: #f7f7f7;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title {
  color: #555;
  font-size: 18px;
  font-weight: 400;
  display: block;
}
.profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.need-help {
  margin-top: 10px;
}
.new-account {
  display: block;
  margin-top: 10px;
}
</style>
