<template>
  <div>
    <div v-for="(shop, index) in shops" :key="index" class="shop">
      <div>
        {{ index + 1 }}
      </div>

      <div>{{ shop.shopname }}</div>
      <div>{{ shop.category }}</div>
      <div>unimplemented</div>
      <popup-window v-if="showPopup" @closePopup="showPopup = false">
        <menu-page :shop="shop"></menu-page>
      </popup-window>
      <button @click="showPopup = true">Show Popup</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PopupWindow from "@/components/PopupWindow.vue";
import MenuPage from "@/components/MenuPage.vue";

export default {
  computed: {
    ...mapState(["shops"]),
  },
  components: {
    PopupWindow,
    MenuPage,
  },
  data() {
    return { showPopup: false };
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