<template>
  <div>
    <h3>Start a business</h3>
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model="form.shopname"
          :class="getInputClass('shopname')"
          name="shopname"
          id="shopname"
          type="text"
        />
        <label for="shopname" class="placeholder">
          <span>shopname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.category"
          :class="getInputClass('category')"
          name="category"
          id="category"
          type="text"
        />
        <label for="category" class="placeholder">
          <span> shop category</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.latitude"
          :class="getInputClass('latitude')"
          name="latitude"
          id="latitude"
          type="number"
        />
        <label for="latitude" class="placeholder">
          <span>latitude</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.longitude"
          :class="getInputClass('longitude')"
          name="longitude"
          id="longitude"
          type="number"
        />
        <label for="longitude" class="placeholder">
          <span>longitude</span>
        </label>
      </div>
      <button type="submit">register</button>
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
        category: "",
        latitude: null,
        longitude: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("addshop", {
          shopname: this.shopname,
          category: this.category,
          latitude: this.latitude,
          longitude: this.longitude,
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });

      this.$store.dispatch("shopname", this.shopname);
      alert("Successfully Registered!");
    },
  },
};
</script>

<style>
</style>