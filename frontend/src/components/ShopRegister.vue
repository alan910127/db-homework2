<template>
  <div>
    <h3>Start a business</h3>
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model.lazy.trim="form.shopname"
          name="shopname"
          id="shopname"
          type="text"
          v-if="user.role === 'user'"
        />
        <input v-else :value="shop.shopname" disabled="true" />
        <label for="shopname" class="placeholder">
          <span> shopname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.category"
          name="category"
          id="category"
          type="text"
          v-if="user.role === 'user'"
        />
        <input v-else :value="shop.category" disabled="true" />
        <label for="category" class="placeholder">
          <span> shop category</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.latitude"
          name="latitude"
          id="latitude"
          type="number"
          v-if="user.role === 'user'"
        />
        <input v-else :value="shop.latitude" disabled="true" />
        <label for="latitude" class="placeholder">
          <span> latitude</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.longitude"
          name="longitude"
          id="longitude"
          type="number"
          v-if="user.role === 'user'"
        />
        <input v-else :value="shop.longitude" disabled="true" />
        <label for="longitude" class="placeholder">
          <span> longitude</span>
        </label>
      </div>
      <button type="submit" :disabled="user.role === 'owner'">register</button>
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
        category: "",
        latitude: null,
        longitude: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("/addshop", {
          account: this.user.account,
          shopname: this.form.shopname,
          category: this.form.category,
          latitude: this.form.latitude,
          longitude: this.form.longitude,
        })
        .then((res) => {
          this.$store.dispatch("shop", res.data);
          console.log(res.data);
          return;
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });

      this.$router.go(0);
    },
  },
  computed: {
    ...mapState(["user", "shop"]),
  },
};
</script>

<style>
</style>