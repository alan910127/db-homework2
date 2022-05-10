<template>
  <div class="searcharea">
    <form @submit.prevent="onSubmit">
      <div class="inputbar">
        <label>Shop</label>
        <input
          v-model.lazy.trim="shopname"
          type="text"
          placeholder="Enter Shop name"
        />
      </div>
      <div class="drop-down-menu">
        <label> distance</label>
        <select v-model="distance" placeholder="Select a distance">
          <option>near</option>
          <option>middle</option>
          <option>far</option>
        </select>
      </div>
      <div class="inputbar">
        <label>Price</label>
        <input v-model.lazy.trim="pricelow" type="number" /> ~
        <input v-model.lazy.trim="pricehigh" type="number" />
      </div>
      <div class="inputbar">
        <label>Meal</label>
        <input v-model.lazy.trim="meal" type="text" placeholder="Enter Meal" />
      </div>
      <div class="inputbar">
        <label>category</label>
        <input
          v-model.lazy.trim="category"
          type="text"
          placeholder="Enter shop category"
        />
      </div>
      <div class="button">
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      shopname: "",
      distance: "",
      pricelow: "",
      pricehigh: "",
      meal: "",
      category: "",
    };
  },
  methods: {
    onSubmit() {
      const response = axios.post("/getshop", {
        shopname: this.shopname,
        distance: this.distance,
        pricelow: this.pricelow,
        pricehigh: this.pricehigh,
        meal: this.meal,
        category: this.category,
      });
      console.log(response);
    },
  },
};
</script>

<style>
</style>