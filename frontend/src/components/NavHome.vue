<template>
  <nav class="navbar">
    <div class="container">
      <div class="collapse">
        <router-link to="/profile" class="nav-link">Home</router-link>
        |
        <router-link to="/shop" class="nav-link">Shop</router-link>
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