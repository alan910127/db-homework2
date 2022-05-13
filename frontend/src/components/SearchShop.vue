<template>
  <div id="searcharea">
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model.lazy.trim="form.shopname"
          name="shopname"
          id="shopname"
          type="text"
        />
        <label for="shopname" class="placeholder">
          <span>Shop Name</span>
        </label>
      </div>
      <div class="drop-down-menu">
        <select v-model.lazy.trim="form.distance">
          <option>near</option>
          <option>middle</option>
          <option>far</option>
        </select>
        <label for="distance" class="placeholder">
          <span>Distance</span>
        </label>
      </div>
      <div id="price">
        <div class="input">
          <input
            v-model.lazy.trim="form.pricelow"
            name="pricelow"
            id="pricelow"
            type="number"
          />
          <label for="pricelow" class="placeholder">
            <span>Lowest Price</span>
          </label>
        </div>
        <div class="input">
          <input
            v-model.lazy.trim="form.pricehigh"
            name="pricehigh"
            id="pricehigh"
            type="number"
          />
          <label for="pricehigh" class="placeholder">
            <span>Highest Price</span>
          </label>
        </div>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.meal"
          name="meal"
          id="meal"
          type="text"
        />
        <label for="meal" class="placeholder">
          <span>Meal</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.category"
          name="category"
          id="category"
          type="text"
        />
        <label for="category" class="placeholder">
          <span>Category</span>
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        shopname: "",
        distance: "",
        pricelow: null,
        pricehigh: null,
        meal: "",
        category: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post("/getshop", {
        shopname: this.form.shopname,
        distance: this.form.distance,
        pricelow: this.form.pricelow,
        pricehigh: this.form.pricehigh,
        meal: this.form.meal,
        category: this.form.category,
      });

      console.log(response.data);

      this.$store.dispatch("shops", response.data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
</style>