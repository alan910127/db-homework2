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
    onSubmit() {
      if (this.account === "" || this.password === "") {
        alert("Please fill in all fields!");
        return;
      }

      const response = axios
        .post("login", {
          account: this.account,
          password: this.password,
        })
        .then((resp) => resp.data.user)
        .catch((err) => {
          console.log(err);
        });

      this.$store.dispatch("user", response.data.user);
      this.$router.push({ name: "home" });
    },
    changePage() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>

<style>
</style>