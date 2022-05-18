<template>
  <div>
    <shop-register />
    <add-meal />
    <meal-list />
  </div>
</template>

<script>
import AddMeal from "./AddMeal.vue";
import ShopRegister from "./ShopRegister.vue";
import MealList from "./MealList.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  components: { ShopRegister, AddMeal, MealList },
  methods: {
    changePage() {
      this.$router.push({ name: "homepage" });
    },
  },
  async created() {
    const response = await axios.get(`/getshop/${this.user.account}`);
    this.$store.dispatch("shop", response.data);
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
</style>