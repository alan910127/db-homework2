<template>
  <div>
    <h3>ADD</h3>
    <form @submit.prevent="onSubmit">
      <div class="input">
        <input
          v-model="form.mealname"
          :class="getInputClass('mealname')"
          name="mealname"
          id="mealname"
          type="text"
        />
        <label for="mealname" class="placeholder">
          <span>mealname</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.price"
          :class="getInputClass('price')"
          name="price"
          id="price"
          type="number"
        />
        <label for="price" class="placeholder">
          <span>price</span>
        </label>
      </div>
      <div class="input">
        <input
          v-model="form.quantity"
          :class="getInputClass('quantity')"
          name="quantity"
          id="quantity"
          type="number"
        />
        <label for="quantity" class="placeholder">
          <span>quantity</span>
        </label>
      </div>
      <div>
        <p>upload picture</p>
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
      },
    };
  },
  methods: {
    async onSubmit() {
      await axios
        .post("/addmeal", {
          mealname: this.mealname,
          price: this.price,
          quantity: this.quantity,
          shopname: mapState["shopname"],
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });

      alert("added successfully!");
      // refresh ?
    },
  },
};
</script>

<style>
</style>