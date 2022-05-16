<template>
  <div class="menu">
    <h1>Menu</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(meal, index) in meals" :key="index">
          <td>{{ index + 1 }}</td>
          <td><img :src="meal.image" width="100" height="100" /></td>
          <td>{{ meal.name }}</td>
          <td>{{ meal.price }}</td>
          <td>{{ meal.quantity }}</td>
          <td>
            <button>Order</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getMeal();
  },

  props: ["shop"],
  data() {
    return {
      meals: [],
    };
  },
  methods: {
    async getMeal() {
      await axios.get(`/getmeal/${this.shop.shopname}`).then((res) => {
        this.meals = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
.menu {
  h1 {
    width: 100%;
    margin: 0;
  }
  table {
    margin-top: 20px;
    margin-left: 10px;

    thead {
      background: #b9b6b6;
      border-radius: 5px;
      border: 2px solid #ffffff;
      tr {
        th {
          text-align: center;
        }
      }
    }
    tbody {
      background: #eeecec;
      border-radius: 5px;
      border: 3px solid #ffffff;
      tr {
        td {
          text-align: center;
          button {
            background: var(--info-color);
            color: var(--white-color);
            border: none;
            padding: 20px 30px;
            border-radius: 5px;
            cursor: pointer;
          }
        }
      }
      input {
        width: 65px;
        text-align: center;
      }
    }
    width: 100%;
    border-collapse: collapse;
  }
}
</style>