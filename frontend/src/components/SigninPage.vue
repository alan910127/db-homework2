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

      const response = await axios.post("login", {
        account: this.account,
        password: this.password,
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