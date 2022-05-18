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
          @change="onInputChange($event, 'mealname')"
        />
        <label for="mealname" class="placeholder">
          <span>mealname</span>
        </label>
        <ul v-if="errors.mealname && errors.mealname.length">
          <li v-for="(error, index) in errors.mealname" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.price"
          name="price"
          id="price"
          type="number"
          :class="getInputClass('price')"
          @change="onInputChange($event, 'price')"
        />
        <label for="price" class="placeholder">
          <span>price</span>
        </label>
        <ul v-if="errors.price && errors.price.length">
          <li v-for="(error, index) in errors.price" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          v-model="form.quantity"
          name="quantity"
          id="quantity"
          type="number"
          :class="getInputClass('quantity')"
          @change="onInputChange($event, 'quantity')"
        />
        <label for="quantity" class="placeholder">
          <span>quantity</span>
        </label>
        <ul v-if="errors.quantity && errors.quantity.length">
          <li v-for="(error, index) in errors.quantity" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="input">
        <input
          type="file"
          accept="image/*"
          :class="getInputClass('file')"
          @change="onInputChange($event, 'file')"
          id="file"
        />
        <ul v-if="errors.file && errors.file.length">
          <li v-for="(error, index) in errors.file" :key="index">
            {{ error }}
          </li>
        </ul>
      </div>
      <button type="submit" :disabled="buttonClass">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import mealValidation from "@/mixins/mealValidation.js";

export default {
  data() {
    return {
      form: {
        mealname: "",
        price: null,
        quantity: null,
        image: null,
      },
      errors: {},
    };
  },
  methods: {
    async getMeals() {
      const response = await axios.get(`/getmeal/${this.shop.shopname}`);
      this.$store.dispatch("meals", response.data);
    },
    async onSubmit() {
      for (const property in this.form) {
        if (property === "image") continue;
        const inputErrors = this.validateField(property, this.form[property]);
        if (inputErrors && inputErrors.length) {
          this.errors[property] = inputErrors;
        } else {
          this.errors[property] = null;
        }
      }

      const inputErrors = this.validateField(
        "file",
        document.getElementById("file").value
      );
      if (inputErrors && inputErrors.length) {
        this.errors["file"] = inputErrors;
      } else {
        this.errors["file"] = null;
      }

      if (this.buttonClass) return;

      await axios.post("/addmeal", {
        mealname: this.form.mealname,
        price: this.form.price,
        quantity: this.form.quantity,
        shopname: this.shop.shopname,
        image: this.form.image,
      });

      this.form.mealname = "";
      this.form.price = null;
      this.form.quantity = null;
      this.form.image = null;
      document.getElementById("file").value = "";
      this.getMeals();
    },
    onInputChange(e, field) {
      const inputValue = e.target.value;
      const inputErrors = this.validateField(field, inputValue);

      if (inputErrors && inputErrors.length) {
        this.errors[field] = inputErrors;
      } else {
        this.errors[field] = null;
      }

      if (field === "file") {
        this.onFileChange(e);
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.form.image = reader.result;
      };
      reader.readAsDataURL(file);
    },
    getInputClass(field) {
      if (field === "price" || field === "quantity") {
        return (
          (this.form[field] !== null ? "filled" : "") +
          (this.errors[field] && this.errors[field].length ? " danger" : "")
        );
      }
      return (
        (this.form[field] && this.form[field].length ? "filled" : "") +
        (this.errors[field] && this.errors[field].length ? " danger" : "")
      );
    },
  },
  computed: {
    ...mapState(["shop"]),
    buttonClass() {
      for (const property in this.errors) {
        if (this.errors[property] && this.errors[property].length) return true;
      }
      return false;
    },
  },
  mixins: [mealValidation],
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