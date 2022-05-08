<template>
  <div class="sign">
    <h3>Sign Up</h3>
    <form @submit.prevent="onSubmit">
      <input v-model="account" type="text" placeholder="Account" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
      <br />
      <button type="button" @click="changePage">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    changePage() {
      this.$emit("change");
    },
  },
};
</script>

<style>
</style>