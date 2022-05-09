<template>
  <nav class="navbar">
    <div class="container">
      <div class="collapse">
        <router-link to="/signin" class="nav-link">Sign in</router-link>
        |
        <router-link to="/signup" class="nav-link">Sign up</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavLogin",
};
</script>

<style>
</style>