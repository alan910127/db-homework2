<template>
  <div>
    <h3>Start a business</h3>
    <form @submit.prevent="onSubmit" class="beautiful-form">
      <div class="input">
        <input
          v-model.lazy.trim="form.shopname"
          name="shopname"
          id="shopname"
          type="text"
          v-if="user.role === 'user'"
          :class="getInputClass('shopname')"
        />
        <input v-else :value="shop.shopname" disabled="true" />
        <label for="shopname" class="placeholder">
          <span v-if="user.role === 'user'">shopname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.category"
          name="category"
          id="category"
          type="text"
          v-if="user.role === 'user'"
          :class="getInputClass('category')"
        />
        <input v-else :value="shop.category" disabled="true" />
        <label for="category" class="placeholder">
          <span v-if="user.role === 'user'"> shop category</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.latitude"
          name="latitude"
          id="latitude"
          type="number"
          step="0.000000000000001"
          v-if="user.role === 'user'"
          :class="getInputClass('latitude')"
        />
        <input v-else :value="shop.latitude" disabled="true" />
        <label for="latitude" class="placeholder">
          <span v-if="user.role === 'user'"> latitude</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model.lazy.trim="form.longitude"
          name="longitude"
          id="longitude"
          type="number"
          step="0.000000000000001"
          v-if="user.role === 'user'"
          :class="getInputClass('longitude')"
        />
        <input v-else :value="shop.longitude" disabled="true" />
        <label for="longitude" class="placeholder">
          <span v-if="user.role === 'user'"> longitude</span>
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
    getInputClass(field) {
      return this.form[field] ? "filled" : "";
    },
  },
  computed: {
    ...mapState(["user", "shop"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.beautiful-form {
  @include flex-row;
  width: auto;
  .input {
    .placeholder {
      height: 1em;
      color: var(--text-color);
      top: 10px;
      overflow: hidden;
    }

    input:disabled {
      &:focus,
      &:hover {
        border: 2px solid var(--secondary-color);
        cursor: not-allowed;
      }
    }
  }
}
</style>