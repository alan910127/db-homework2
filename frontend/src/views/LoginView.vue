<template>
  <div class="login">
    <h1>Login Page</h1>
    <signin-page v-if="user === null"></signin-page>
    <signup-page v-else></signup-page>
  </div>
</template>

<script>
import SigninPage from "@/components/SigninPage.vue";
import SignupPage from "@/components/SigninPage.vue";

export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    SigninPage,
    SignupPage,
  },
};
</script>

<style>
</style>