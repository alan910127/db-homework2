<template>
  <div>
    <div v-for="(shop, index) in shops" :key="index" class="shop">
      <div>
        {{ index + 1 }}
      </div>

      <div>{{ shop.shopname }}</div>
      <div>{{ shop.category }}</div>
      <div>unimplemented</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["shops"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.shop {
  @include flex-row;
  width: 500px;
  align-content: space-between;
  div {
    flex-basis: calc(100% - 10px);
  }
}
</style>