<template>
  <div class="sign">
    <form @submit.prevent="onSubmit">
      <h3>Sign Up</h3>
      <div class="form-group">
        <label>Real Name</label>
        <input
          v-model.lazy.trim="realname"
          type="text"
          placeholder="Real Name"
        />
      </div>
      <div class="form-group">
        <label>Account</label>
        <input v-model.lazy.trim="account" type="text" placeholder="Account" />
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input
          v-model.lazy.trim="phone"
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model.lazy.trim="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input
          v-model.lazy.trim="confirm"
          type="password"
          placeholder="Retype Password"
        />
      </div>
      <div class="form-group">
        <label>Latitude</label>
        <input
          v-model.lazy.trim="latitude"
          type="number"
          placeholder="Latitude"
        />
      </div>
      <div class="form-group">
        <label>Longitude</label>
        <input
          v-model.lazy.trim="longitude"
          type="number"
          placeholder="Longitude"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      realname: "",
      account: "",
      phone: "",
      password: "",
      confirm: "",
      latitude: null,
      longitude: null,
    };
  },
  methods: {
    async onSubmit() {
      if (
        this.realname === "" ||
        this.account === "" ||
        this.phone === "" ||
        this.password === "" ||
        this.confirm === ""
      ) {
        alert("Please fill in all fields!");
        this.password = this.confirm = "";
        return;
      }

      if (this.password !== this.confirm) {
        alert("Please check your password!");
        this.password = this.confirm = "";
        return;
      }

      await axios
        .post("register", {
          realname: this.realname,
          account: this.account,
          phone: this.phone,
          password: this.password,
          latitude: this.latitude,
          longitude: this.longitude,
        })
        .catch((error) => {
          const status = error.response.status;
          if (status === 444) {
            alert("This account has been registered!");
            return;
          } else {
            throw error;
          }
        });

      this.$router.push({ name: "signin" });
    },

    changePage() {
      this.$router.push({ name: "signin" });
    },
  },
  watch: {
    account(newAccount, oldAccount) {
      console.log(`Field "Account": '${oldAccount}' -> '${newAccount}'.`);
    },
  },
};
</script>

<style>
</style>