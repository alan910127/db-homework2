<template>
  <div>
    <h1>Menu</h1>
    <div>{{ shop.shopname }}</div>
    <div>{{ shop.category }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["shop"],
  methods: {
    async getMeal() {
      await axios.post({
        shopname: this.shop.shopname,
      });
    },
  },
};
</script>

<style>
</style>