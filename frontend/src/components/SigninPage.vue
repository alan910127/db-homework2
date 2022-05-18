<template>
  <form @submit.prevent="onSubmit" class="beautiful-form">
    <div class="input">
      <input
        v-model="form.account"
        @change="onInputChange($event, 'account')"
        :class="getInputClass('account')"
        name="account"
        id="account"
        type="text"
      />
      <label for="account" class="placeholder">
        <span>Account</span>
      </label>
      <ul v-if="errors.account && errors.account.length">
        <li v-for="(error, index) in errors.account" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="input">
      <input
        v-model="form.password"
        @change="onInputChange($event, 'password')"
        :class="getInputClass('password')"
        name="password"
        id="password"
        type="password"
      />
      <label for="password" class="placeholder">
        <span>Password</span>
      </label>
      <ul v-if="errors.password && errors.password.length">
        <li v-for="(error, index) in errors.password" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";
import signupValidation from "@/mixins/signupValidation.js";

export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async onSubmit() {
      for (const property in this.form) {
        const inputErrors = this.validateField(property, this.form[property]);
        if (inputErrors && inputErrors.length) {
          this.errors[property] = inputErrors;
        } else {
          this.errors[property] = null;
        }
      }

      if (this.buttonClass) return;

      try {
        const response = await axios.post("/login", {
          account: this.form.account,
          password: this.form.password,
        });
        console.log(response.data);
        this.$store.dispatch("user", response.data);
      } catch (error) {
        const status = error.response.status;
        if (status === 444) {
          // user-defined error
          alert(error.response.data.error);
          this.form.account = this.form.password = "";
        }
        return;
      }

      const response = await axios.get(`/getshop/${this.form.account}`);
      this.$store.dispatch("shop", response.data);

      this.$router.push({ name: "homepage" });
    },
    changePage() {
      this.$router.push({ name: "signup" });
    },
    getInputClass(fieldName) {
      return (
        (this.form[fieldName].length ? "filled" : "") +
        (this.errors[fieldName] && this.errors[fieldName].length
          ? " danger"
          : "")
      );
    },
    async onInputChange(e, field) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(field, inputValue);

      if (inputErrors && inputErrors.length) {
        this.errors[field] = inputErrors;
      } else {
        this.errors[field] = null;
      }

      if (field === "account") {
        const response = await axios.get(`/getuser/${inputValue}`);

        if (Object.keys(response.data).length === 0) {
          this.errors[field] = [
            ...(this.errors[field] ? this.errors[field] : []),
            "This account does not exist",
          ];
        }
      }
    },
  },
  computed: {
    buttonClass() {
      for (const property in this.errors) {
        if (this.errors[property] && this.errors[property].length) return true;
      }
      return false;
    },
  },
  mixins: [signupValidation],
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
</style>