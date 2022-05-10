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
  created() {
    if (this.user === null) this.$router.push({ name: "signin" });
    else {
      // update the user data when the user has logged in (i.e., on refresh)
      axios
        .get(`/getuser/${this.user.account}`)
        .then((response) => this.$store.dispatch("user", response.data))
        .catch((error) => console.log(error));
      this.$router.push({ name: "homepage" });
    }
  },
  computed: {
    ...mapState({ user: (state) => state.user }),
  },
};
</script>


<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
