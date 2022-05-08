<template>
  <div class="sign">
    <form @submit.prevent="onSubmit">
      <input v-model="account" type="text" placeholder="Account" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>