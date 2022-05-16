<template>
  <div>
    <h3>ADD</h3>
    <form @submit.prevent="onSubmit" class="beautiful-form">
      <div class="input">
        <input
          v-model="form.mealname"
          name="mealname"
          id="mealname"
          type="text"
          :class="getInputClass('mealname')"
        />
        <label for="mealname" class="placeholder">
          <span> mealname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.price"
          name="price"
          id="price"
          type="number"
          :class="getInputClass('price')"
        />
        <label for="price" class="placeholder">
          <span> price</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.quantity"
          name="quantity"
          id="quantity"
          type="number"
          :class="getInputClass('quantity')"
        />
        <label for="quantity" class="placeholder">
          <span> quantity</span>
        </label>
      </div>
      <div class="input">
        <input type="file" accept="image/*" @change="onFileChange" id="file" />
      </div>
      <button type="submit">Add</button>
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
        mealname: "",
        price: null,
        quantity: null,
        image: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("/addmeal", {
          mealname: this.form.mealname,
          price: this.form.price,
          quantity: this.form.quantity,
          shopname: this.shop.shopname,
          image: this.form.image,
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });

      alert("added successfully!");
      this.form.mealname = "";
      this.form.price = null;
      this.form.quantity = null;
      this.form.image = null;
      this.getMeals();
      document.getElementById("file").value = "";
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.form.image = reader.result;
      };
      reader.readAsDataURL(file);
    },
    async getMeals() {
      const res = await axios.get(`/getmeal/${this.shop.shopname}`);
      console.log(res.data);
      this.$store.dispatch("meals", res.data);
    },
    getInputClass(field) {
      return this.form[field] ? "filled" : "";
    },
  },
  computed: {
    ...mapState(["shop"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

.beautiful-form {
  @include flex-row;
  width: auto;
  .input {
    input[type="file"] {
      cursor: pointer;
      height: 40px;
      &::-webkit-file-upload-button {
        display: none;
      }
    }

    .placeholder {
      height: 1em;
      color: var(--text-color);
      top: 10px;
      overflow: hidden;
    }
  }
}
</style>