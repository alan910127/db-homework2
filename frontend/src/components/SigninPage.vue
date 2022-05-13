<template>
  <form @submit.prevent="onSubmit" class="beautiful-form">
    <div class="input">
      <input
        v-model="form.account"
        :class="getInputClass('account')"
        name="account"
        id="account"
        type="text"
      />
      <label for="account" class="placeholder">
        <span>Account</span>
      </label>
    </div>
    <div class="input">
      <input
        v-model="form.password"
        :class="getInputClass('password')"
        name="password"
        id="password"
        type="password"
      />
      <label for="password" class="placeholder">
        <span>Password</span>
      </label>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      if (!this.form.account || !this.form.password) {
        alert("Please fill in all fields!");
        return;
      }

      const response = await axios
        .post("login", {
          account: this.form.account,
          password: this.form.password,
        })
        .catch((error) => {
          const status = error.response.status;
          if (status === 444) {
            // user-defined error
            alert(error.response.data.error);
            this.form.account = this.form.password = "";
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
    getInputClass(fieldName) {
      return this.form[fieldName].length ? "filled" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
</style>