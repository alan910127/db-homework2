<template>
  <div class="header">
    <h3 class="home" @click="changePage">Home</h3>
    <h3 class="shop" @click="changePage">Shop</h3>
  </div>
</template>

<script>
export default {
  name: "NavHome",
  data() {
    return {
      isHomePage: true,
    };
  },
  methods: {
    changePage() {
      this.isHomePage = !this.isHomePage;
      this.$router.push({ name: this.isHomePage ? "homepage" : "shoppage" });
    },
  },
};
</script>

<style>
</style>