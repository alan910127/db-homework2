<template>
  <div class="sign">
    <h3>Sign Up</h3>
    <form @submit.prevent="onSubmit">
      <input v-model.lazy.trim="realname" type="text" placeholder="Real Name" />
      <input v-model.lazy.trim="account" type="text" placeholder="Account" />
      <input v-model.lazy.trim="phone" type="text" placeholder="Phone Number" />
      <input
        v-model.lazy.trim="password"
        type="password"
        placeholder="Password"
      />
      <input
        v-model.lazy.trim="retype"
        type="password"
        placeholder="Retype Password"
      />
      <input
        v-model.lazy.trim="latitude"
        type="number"
        placeholder="Latitude"
      />
      <input
        v-model.lazy.trim="longitude"
        type="number"
        placeholder="Longitude"
      />
      <button type="submit">Sign Up</button>
      <hr />
      <p>Already registered?</p>
      <button type="button" @click="changePage">Sign In</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import sha256 from "sha256";

export default {
  data() {
    return {
      realname: "",
      account: "",
      phone: "",
      password: "",
      retype: "",
    };
  },
  methods: {
    genSalt(length) {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let numChars = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * numChars));
      }
      return result;
    },

    onSubmit() {
      axios
        .get(`http://localhost:5000/getuser/${this.account}`)
        .then((resp) => resp["data"])
        .then((user) => {
          if (Object.entries(user).length > 0) {
            alert("This account has been registered.");
            return;
          }
        });

      const salt = this.genSalt(8);
      const hash = sha256(salt + this.password);
      console.log(`${salt}$${hash}`);
      axios.post("http://localhost:5000/newUser", {
        realname: this.realname,
        account: this.account,
        phone: this.phone,
        password: `${salt}$${hash}`,
      });
    },

    changePage() {
      this.$emit("change-page");
    },
  },
};
</script>

<style>
</style>