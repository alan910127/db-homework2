<template>
  <div id="app">
    <login-view v-if="user === null" @success="onLogin"></login-view>
    <home-view v-else></home-view>
  </div>
</template>

<script>
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";

export default {
  data() {
    return {
      user: null,
    };
  },
  components: {
    LoginView,
    HomeView,
  },
  methods: {
    onLogin(user) {
      this.user = user;
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
