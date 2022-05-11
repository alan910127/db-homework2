<template>
  <div>
    <h1>Shop Page</h1>
    <shop-register />
    <add-meal />
  </div>
</template>

<script>
import AddMeal from "./AddMeal.vue";
import ShopRegister from "./ShopRegister.vue";
export default {
  components: { ShopRegister, AddMeal },
};
</script>

<style>
</style>