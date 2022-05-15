<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(meal, index) in meals" :key="index">
          <td>{{ index + 1 }}</td>
          <td><img :src="meal.image" width="100" height="100" /></td>
          <td>{{ meal.name }}</td>
          <td>
            <input
              v-if="!isEdit[index]"
              :value="meal.price"
              disabled="true"
              type="number"
            />
            <input v-else v-model="meal.price" />
          </td>
          <td>
            <input
              v-if="!isEdit[index]"
              :value="meal.quantity"
              disabled="true"
              type="number"
            />
            <input v-else v-model="meal.quantity" />
          </td>
          <td>
            <button v-if="!isEdit[index]" @click="isEdit[index] = true">
              Edit
            </button>
            <button v-else @click="onEdit(index, meal)">Finish</button>
          </td>
          <td>
            <button @click="onDelete(index, meal)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  created() {
    this.getMeals();
    console.log(this.isEdit);
  },
  data() {
    return {
      isEdit: [],
    };
  },
  methods: {
    async getMeals() {
      const res = await axios.get(`/getmeal/${this.shop.shopname}`);
      console.log(res.data);
      this.$store.dispatch("meals", res.data);
    },
    onDelete(index, meal) {
      axios
        .post(`/deletemeal`, {
          mealname: meal.name,
          shopname: this.shop.shopname,
        })
        .then(() => {
          this.isEdit[index] = false;
          this.getMeals();
        });
    },
    onEdit(index, meal) {
      console.log(this.isEdit);
      this.isEdit[index] = false;
      axios
        .post(`/editmeal`, {
          mealname: meal.name,
          price: meal.price,
          quantity: meal.quantity,
          shopname: this.shop.shopname,
        })
        .then(() => {
          let checker = (item) => item === false;
          if (this.isEdit.every(checker)) this.getMeals();
        })
        .catch((error) => {
          const response = error.response.data.message;
          alert(response);
          return;
        });
    },
  },

  computed: {
    ...mapState(["shop", "meals"]),
  },
};
</script>

<style>
</style>