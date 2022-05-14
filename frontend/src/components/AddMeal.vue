<template>
  <div>
    <h3>ADD</h3>
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model="form.mealname"
          name="mealname"
          id="mealname"
          type="text"
        />
        <label for="mealname" class="placeholder">
          <span> mealname</span>
        </label>
      </div>
      <div class="input">
        <input v-model="form.price" name="price" id="price" type="number" />
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
        />
        <label for="quantity" class="placeholder">
          <span> quantity</span>
        </label>
      </div>
      <div>
        <label> upload picture</label><br />
        <input type="file" accept=".png,.jpg,.jpeg" @change="onFileChange" />
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
        .then(() => {
          alert("added successfully!");
          // this.$router.go(0);
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });
    },
    onFileChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.form.image = reader.result;
      };
      reader.readAsDataURL(file);
    },
  },
  computed: {
    ...mapState(["shop"]),
  },
};
</script>

<style>
</style>