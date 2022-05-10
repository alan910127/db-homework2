<template>
  <div class="sign">
    <form @submit.prevent="onSubmit">
      <h3>Sign In</h3>
      <div class="form-group">
        <label>Account</label>
        <input v-model="account" type="text" placeholder="Account" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="Password" />
      </div>
      <button>Login</button><br />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      if (this.account === "" || this.password === "") {
        alert("Please fill in all fields!");
        return;
      }

      const response = await axios
        .post("login", {
          account: this.account,
          password: this.password,
        })
        .catch((error) => {
          const status = error.response.status;
          if (status === 444) {
            // user-defined error
            alert(error.response.data.error);
            this.account = this.password = "";
            return;
          } else {
            throw error;
          }
        });

      console.log(response.data);

      this.$store.dispatch("user", response.data);

      console.log(this.$store.state.user);

      this.$router.push({ name: "homepage" });
    },
    changePage() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>

<style>
</style>