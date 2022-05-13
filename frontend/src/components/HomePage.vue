<template>
  <div id="homepage">
    <user-profile />
    <div>
      <search-shop />
      <shop-list />
    </div>
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

<style lang="scss" scoped>
@import "@/styles/global.scss";

#homepage {
  @include flex-row;
  justify-content: space-evenly;
}
</style>