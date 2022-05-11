<template>
  <div class="searchArea">
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
          <span>shop name</span>
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
          <span>shop category</span>
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
        latitude: "",
        longitude: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("/addshop", {
          shopname: this.form.shopname,
          category: this.form.category,
          latitude: this.form.latitude,
          longitude: this.form.longitude,
        })
        .catch((error) => {
          const status = error.response.status;
          if (status === 444) {
            alert("error msg");
          } else {
            throw error;
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/global.scss";

form {
  @include flex;
  gap: 20px;
  width: clamp(300px, 30%, 400px);
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 14px 20px 12px #00000012;
  border-radius: 8px;
  color: var(--text-color);
  h3 {
    font-size: 26px;
    font-weight: 400;
    margin: 0;
  }
  .input {
    position: relative;
    @include flex;
    input {
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
  button {
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    background-color: var(--info-color);
    color: var(--white-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }
}
</style>
