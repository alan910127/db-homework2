<template>
  <div>
    <shop-register />
    <add-meal />
    <meal-list />
  </div>
</template>

<script>
import AddMeal from "./AddMeal.vue";
import ShopRegister from "./ShopRegister.vue";
import MealList from "./MealList.vue";

export default {
  components: { ShopRegister, AddMeal, MealList },
  methods: {
    changePage() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>