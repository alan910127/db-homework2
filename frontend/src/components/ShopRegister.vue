<template>
  <div>
    <h3>Start a business</h3>
    <form @submit.prevent="onSubmit" class="beautiful-form">
      <div class="input">
        <input
          v-model="form.shopname"
          name="shopname"
          id="shopname"
          type="text"
          v-if="user.role === 'user'"
          :class="getInputClass('shopname')"
          @change="onInputChange($event, 'shopname')"
        />
        <input v-else :value="shop.shopname" disabled="true" />
        <label for="shopname" class="placeholder">
          <span v-if="user.role === 'user'">shopname</span>
        </label>
        <ul v-if="errors.shopname && errors.shopname.length">
          <li v-for="(error, index) in errors.shopname" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model.trim="form.category"
          name="category"
          id="category"
          type="text"
          v-if="user.role === 'user'"
          :class="getInputClass('category')"
          @change="onInputChange($event, 'category')"
        />
        <input v-else :value="shop.category" disabled="true" />
        <label for="category" class="placeholder">
          <span v-if="user.role === 'user'"> shop category</span>
        </label>
        <ul v-if="errors.category && errors.category.length">
          <li v-for="(error, index) in errors.category" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model.trim="form.latitude"
          name="latitude"
          id="latitude"
          type="number"
          step="0.000000000000001"
          v-if="user.role === 'user'"
          :class="getInputClass('latitude')"
          @change="onInputChange($event, 'latitude')"
        />
        <input v-else :value="shop.latitude" disabled="true" />
        <label for="latitude" class="placeholder">
          <span v-if="user.role === 'user'"> latitude</span>
        </label>
        <ul v-if="errors.latitude && errors.latitude.length">
          <li v-for="(error, index) in errors.latitude" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model.trim="form.longitude"
          name="longitude"
          id="longitude"
          type="number"
          step="0.000000000000001"
          v-if="user.role === 'user'"
          :class="getInputClass('longitude')"
          @change="onInputChange($event, 'longitude')"
        />
        <input v-else :value="shop.longitude" disabled="true" />
        <label for="longitude" class="placeholder">
          <span v-if="user.role === 'user'"> longitude</span>
        </label>
        <ul v-if="errors.longitude && errors.longitude.length">
          <li v-for="(error, index) in errors.longitude" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit" :disabled="user.role === 'owner' || buttonClass">
        register
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import shopValidation from "@/mixins/shopValidation.js";

export default {
  created() {
    if (this.shop !== null) {
      this.form.shopname = this.shop.shopname;
      this.form.category = this.shop.category;
      this.form.latitude = this.shop.latitude;
      this.form.longitude = this.shop.longitude;
    }
  },
  data() {
    return {
      form: {
        shopname: "",
        category: "",
        latitude: null,
        longitude: null,
      },
      errors: {},
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
          this.updateUser(this.user.account);
          return;
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });

      this.$router.go(0);
    },
    getInputClass(fieldName) {
      if (fieldName !== "longitude" && fieldName !== "latitude") {
        return (
          (this.form[fieldName] !== "" ? "filled" : "") +
          (this.errors[fieldName] && this.errors[fieldName].length
            ? " danger"
            : "")
        );
      }
      return (
        (this.form[fieldName] !== null ? "filled" : "") +
        (this.errors[fieldName] && this.errors[fieldName].length
          ? " danger"
          : "")
      );
    },
    async onInputChange(e, field) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(field, inputValue);

      if (inputErrors && inputErrors.length) {
        this.errors[field] = inputErrors;
      } else {
        this.errors[field] = null;
      }

      if (field === "shopname") {
        const response = await axios.get(`/getshopname/${inputValue}`);
        if (Object.keys(response.data).length !== 0) {
          this.errors[field] = [
            ...(this.errors[field] ? this.errors[field] : []),
            "This shop name is already taken",
          ];
        }
      }
    },
    async updateUser(account) {
      const response = await axios.get(`/getuser/${account}`);
      console.log(response.data);
      this.$store.dispatch("user", response.data);
    },
  },
  computed: {
    ...mapState(["user", "shop"]),
    buttonClass() {
      for (const property in this.errors) {
        if (this.errors[property] && this.errors[property].length) return true;
      }
      return false;
    },
  },
  mixins: [shopValidation],
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

      &.danger {
        border: 2px solid var(--danger-color);
      }
    }
  }
}
</style>