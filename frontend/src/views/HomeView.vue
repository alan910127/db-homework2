<template>
  <div class="home">
    <side-bar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  data() {
    return {
      showPopup: false,
      isHomePage: true,
    };
  },
  components: { SideBar },
  methods: {
    changePage(clickTarget) {
      this.isHomePage = clickTarget === "home";
      this.$router.push({ name: this.isHomePage ? "homepage" : "shoppage" });
    },
    getNavItemClass(nav) {
      if (this.isHomePage) {
        return nav === "home" ? "current" : "another";
      } else {
        return nav === "shop" ? "current" : "another";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  display: flex;
  gap: 3%;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>