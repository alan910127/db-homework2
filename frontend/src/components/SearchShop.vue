<template>
  <div id="searcharea">
    <form @submit.prevent="onSubmit" class="beautiful-form">
      <div class="input">
        <input
          v-model.lazy.trim="form.shopname"
          name="shopname"
          id="shopname"
          type="text"
          :class="getInputClass('shopname')"
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
      </div>

      <div class="input">
        <input
          v-model.lazy="form.pricelow"
          name="pricelow"
          id="pricelow"
          type="number"
          :class="getInputClass('pricelow')"
        />
        <label for="pricelow" class="placeholder">
          <span>Lowest Price</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy="form.pricehigh"
          name="pricehigh"
          id="pricehigh"
          type="number"
          :class="getInputClass('pricehigh')"
        />
        <label for="pricehigh" class="placeholder">
          <span>Highest Price</span>
        </label>
      </div>

      <div class="input">
        <input
          v-model.lazy.trim="form.meal"
          name="meal"
          id="meal"
          type="text"
          :class="getInputClass('meal')"
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
          :class="getInputClass('category')"
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
import { mapState } from "vuex";

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
        account: this.user.account,
        shopname: this.form.shopname,
        distance: this.form.distance,
        pricelow: this.form.pricelow,
        pricehigh: this.form.pricehigh,
        meal: this.form.meal,
        category: this.form.category,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
        order: "",
        page: 0,
      });

      this.$store.dispatch("searchFilter", {
        account: this.user.account,
        shopname: this.form.shopname,
        distance: this.form.distance,
        pricelow: this.form.pricelow,
        pricehigh: this.form.pricehigh,
        meal: this.form.meal,
        category: this.form.category,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
      });
      this.$store.dispatch("shops", response.data);
      console.log(response.data);
    },
    getInputClass(field) {
      return this.form[field] ? "filled" : "";
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.beautiful-form {
  @include flex-row;
  width: auto;
  .drop-down-menu {
    position: relative;
    @include flex;

    select {
      border: 2px solid var(--secondary-color);
      border-radius: 8px;
      background-color: var(--secondary-color);
      outline: none;
      color: var(--text-color);
      padding: 10px 12px;
      box-sizing: border-box;
      font-size: 14px;
      transition: all 0.3s ease;

      &:focus,
      &:hover,
      &.filled {
        border: 2px solid var(--info-color);
      }

      &:focus + .placeholder span,
      &.filled + .placeholder span {
        transform: translateY(-100%);
      }
    }
    .placeholder {
      @include flex;
      position: absolute;
      width: calc(100% - 24px);
      top: 10px;
      left: 12px;
      pointer-events: none;
      overflow: hidden;

      span {
        transition: all 0.3s ease;
        font-size: 14px;
      }
    }
  }
}
</style>