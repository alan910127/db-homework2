<template>
  <div class="sign">
    <h3>Sign In</h3>
    <form @submit.prevent="onSubmit">
      <input v-model="account" type="text" placeholder="Account" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button><br />
      <button type="button" @click="changePage">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import sha256 from "sha256";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .get(`http://localhost:5000/getuser/${this.account}`)
        .then((resp) => resp["data"])
        .then((user) => {
          console.log(user);

          if (Object.entries(user).length === 0) {
            alert("Login Failed!");
            return;
          }

          const entries = user["password"].split("$");
          const salt = entries[0];
          const encoded = entries[1];

          const hash = sha256(salt + this.password);

          if (hash !== encoded) {
            alert("Login Failed!");
          } else {
            this.$emit("success", user);
          }
        })
        .catch((error) => console.log(error));
    },
    changePage() {
      this.$emit("change");
    },
  },
};
</script>

<style>
</style>