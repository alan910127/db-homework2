<template>
  <div>
    <user-profile />
    <search-shop />
    <shop-list />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import SearchShop from "@/components/SearchShop.vue";
import ShopList from "@/components/ShopList.vue";

export default {
  components: { UserProfile, SearchShop, ShopList },
};
</script>

<style>
</style>