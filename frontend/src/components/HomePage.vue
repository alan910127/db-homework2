<template>
  <div>
    <h3>Tonight, I want...</h3>
    <search-shop />
    <shop-list />
  </div>
</template>

<script>
import SearchShop from "@/components/SearchShop.vue";
import ShopList from "@/components/ShopList.vue";

export default {
  components: { SearchShop, ShopList },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
</style>