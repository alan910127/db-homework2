<template>
  <div class="sign">
    <h3>Sign Up</h3>
    <form @submit.prevent="onSubmit">
      <input v-model="realname" type="text" placeholder="Real Name" />
      <input v-model="account" type="text" placeholder="Account" />
      <input v-model="phone" type="text" placeholder="Phone Number" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="retype" type="password" placeholder="Retype Password" />
      <input v-model="latitude" type="number" placeholder="Latitude" />
      <input v-model="longitude" type="number" placeholder="Longitude" />
      <p>Already registered?</p>
      <button type="submit">Sign Up</button>
      <hr />
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