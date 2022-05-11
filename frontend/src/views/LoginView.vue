<template>
  <div class="login">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.login {
  @include flex;
  justify-content: center;
  width: clamp(300px, 30%, 400px);
}
</style>