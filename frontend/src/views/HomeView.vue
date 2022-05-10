<template>
  <div class="home">
    <h1>Home Page</h1>
    <button type="button" @click="onClick">Logout</button>
    <nav-home />
    <router-view />
  </div>
</template>

<script>
import NavHome from "@/components/NavHome.vue";

export default {
  name: "HomeView",
  components: {
    NavHome,
  },
  methods: {
    onClick() {
      this.$store.dispatch("user", null);
      this.$router.push({ name: "signin" });
    },
  },
};
</script>
