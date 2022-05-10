<template>
  <nav class="navbar">
    <div class="container">
      <div class="collapse">
        <router-link to="/homepage" class="nav-link">Home</router-link>
        |
        <router-link to="/shoppage" class="nav-link">Shop</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavHome",
};
</script>

<style>
</style>