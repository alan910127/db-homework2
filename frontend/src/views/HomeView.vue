<template>
  <div class="home">
    <h1>Home Page</h1>
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
};
</script>
