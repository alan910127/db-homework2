<template>
  <div>
    <shop-register />
    <add-meal />
  </div>
</template>

<script>
import AddMeal from "./AddMeal.vue";
import ShopRegister from "./ShopRegister.vue";
export default {
  components: { ShopRegister, AddMeal },
  methods: {
    changePage() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>