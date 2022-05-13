<template>
  <div class="home">
    <h1>Home Page</h1>
    <button type="button" @click="onClick">Logout</button>
    <nav-home />
    <router-view />
    <popup-window v-if="showPopup" @closePopup="showPopup = false">
      <h1>Popup!</h1>
    </popup-window>
    <button @click="showPopup = true">Show Popup</button>
  </div>
</template>

<script>
import NavHome from "@/components/NavHome.vue";
import PopupWindow from "../components/PopupWindow.vue";

export default {
  name: "HomeView",
  data() {
    return {
      showPopup: false,
    };
  },
  components: {
    NavHome,
    PopupWindow,
  },
  methods: {
    onClick() {
      this.$store.dispatch("user", null);
      this.$router.push({ name: "signin" });
    },
  },
};
</script>
