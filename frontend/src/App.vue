<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  async created() {
    if (this.user === null) this.$router.push({ name: "signin" });
    else {
      // update the user data when the user has logged in (i.e., on refresh)
      await axios.get(`/getuser/${this.user.account}`);
      this.$router.push({ name: "homepage" });
    }
  },
  computed: {
    ...mapState({ user: (state) => state.user }),
  },
};
</script>


<style lang="scss">
@import "@/styles/global.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
}
</style>
