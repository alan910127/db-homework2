<template>
  <div class="login">
    <div class="custom-nav">
      <h3 :class="getNavItemClass('signin')" @click="changePage('signin')">
        Sign In
      </h3>
      <h3 :class="getNavItemClass('signup')" @click="changePage('signup')">
        Sign Up
      </h3>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSignIn: true,
    };
  },
  methods: {
    changePage(clickTarget) {
      this.isSignIn = clickTarget === "signin";
      this.$router.push({ name: this.isSignIn ? "signin" : "signup" });
    },
    getNavItemClass(nav) {
      if (this.isSignIn) {
        return nav === "signin" ? "current" : "another";
      } else {
        return nav === "signup" ? "current" : "another";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.login {
  @include flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: clamp(300px, 30%, 400px);

  .custom-nav {
    width: clamp(300px, 30%, 400px);
  }
}
</style>