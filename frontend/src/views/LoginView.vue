<template>
  <div class="login">
<<<<<<< HEAD
    <h1>Login Page</h1>
    <signin-page v-if="user === null"></signin-page>
    <signup-page v-else></signup-page>
=======
    <h1>This is Login Page</h1>
>>>>>>> d9b4107458d39be32478cad18277ee3490f7b3ce
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