<template>
  <div class="login">
    <nav-login />
    <router-view />
  </div>
</template>

<script>
import NavLogin from "../components/NavLogin.vue";
export default {
  data() {
    return {};
  },
  components: { NavLogin },
  methods: {
    logInSuccessed(user) {
      this.$emit("success", user);
    },
  },
};
</script>

<style>
</style>