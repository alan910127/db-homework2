<template>
  <div class="login">
    <h1>Login Page</h1>
    <signin-page v-if="isSigninPage" @change-page="switchPage"></signin-page>
    <signup-page v-else @change-page="switchPage"></signup-page>
  </div>
</template>

<script>
import SigninPage from "@/components/SigninPage.vue";
import SignupPage from "@/components/SignupPage.vue";

export default {
  data() {
    return {
      isSigninPage: true,
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
    switchPage() {
      this.isSigninPage = !this.isSigninPage;
    },
  },
};
</script>

<style>
</style>