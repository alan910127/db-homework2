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
              v-model="meal.price"
              :disabled="!meal.isEdit"
              type="number"
              min="0"
            />
          </td>
          <td>
            <input
              v-model="meal.quantity"
              :disabled="!meal.isEdit"
              type="number"
              min="0"
            />
          </td>
          <td>
            <button @click="editOnClick(meal)">
              {{ getEditButtonTag(meal) }}
            </button>
          </td>
          <td>
            <button @click="onDelete(meal)">delete</button>
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
  },
  data() {
    return {};
  },
  methods: {
    getEditButtonTag(meal) {
      return meal.isEdit ? "Finish" : "Edit";
    },
    async getMeals() {
      const response = await axios.get(`/getmeal/${this.user.shopname}`);
      this.$store.dispatch("meals", response.data);
    },
    async onDelete(meal) {
      await axios.post(`/deletemeal`, {
        mealname: meal.name,
        shopname: this.shop.shopname,
      });
      this.getMeals();
    },
    async editOnClick(meal) {
      meal.isEdit = !meal.isEdit;
      if (meal.isEdit) return;

      let inputErrors = [];
      if (meal.price < 0) inputErrors.push("Price must be nonnegative");
      if (meal.quantity < 0) inputErrors.push("Quantity must be nonnegative");
      if (inputErrors.length > 0) {
        alert(inputErrors.join("\n"));
        meal.isEdit = true;
        return;
      }

      const numEditing = this.meals.filter((m) => m.isEdit === true).length;

      if (numEditing === 0) {
        await axios
          .post(`/editmeal`, {
            mealname: meal.name,
            price: meal.price,
            quantity: meal.quantity,
            shopname: this.shop.shopname,
          })
          .catch((error) => {
            const message = error.response.data.message;
            alert(message);
            return;
          });
        this.getMeals();
      }
    },
  },
  computed: {
    ...mapState(["user", "shop", "meals"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

table {
  margin-top: 20px;
  margin-left: 10px;
  thead {
    tr {
      background: #cfcccc;
      th {
        text-align: center;
      }
    }
  }
  tbody {
    tr {
      background: #eeecec;
      td {
        text-align: center;
      }
    }
    input {
      width: 65px;
      text-align: center;

      /* Chrome, Safari, Edge, Opera */
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
  width: 100%;
  border-collapse: collapse;
}
</style>