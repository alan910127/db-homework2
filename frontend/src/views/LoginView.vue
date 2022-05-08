<template>
  <div class="login">
    <h1>Login Page</h1>
    <signin-page
      v-if="flag === 'sign-in'"
      @success="logInSuccessed"
    ></signin-page>
    <signup-page v-else></signup-page>
  </div>
</template>

<script>
import SigninPage from "@/components/SigninPage.vue";
import SignupPage from "@/components/SigninPage.vue";

export default {
  data() {
    return {
      flag: "sign-in",
    };
  },
  components: {
    SigninPage,
    SignupPage,
  },
  methods: {
    logInSuccessed(user) {
      this.$emit("success", user);
    },
  },
};
</script>

<style>
</style>