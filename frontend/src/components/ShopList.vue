<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          |
          <th class="clickable" @click="setOrder('shopname')">Shop Name</th>
          |
          <th class="clickable" @click="setOrder('category')">Category</th>
          |
          <th class="clickable" @click="setOrder('distance')">Distance</th>
          |
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in shops" :key="index" class="shop">
          <td>{{ index + 1 }}</td>
          <td>{{ shop.shopname }}</td>
          <td>{{ shop.category }}</td>
          <td>{{ getDistance(shop) }}</td>
          <td>
            <popup-window v-if="shop.show" @closePopup="shop.show = false">
              <menu-page :shop="shop"></menu-page>
            </popup-window>
            <button @click="shop.show = true">Menu</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import PopupWindow from "@/components/PopupWindow.vue";
import MenuPage from "@/components/MenuPage.vue";
import haversine from "haversine";

export default {
  created() {
    this.$store.dispatch("shops", []);
  },
  data() {
    return {
      page: 0,
      orders: {
        shopname: "asc",
        category: "asc",
        distance: "asc",
        current: null,
      },
    };
  },
  methods: {
    getDistance(shop) {
      const distance = haversine(
        {
          latitude: this.user.latitude,
          longitude: this.user.longitude,
        },
        {
          latitude: shop.latitude,
          longitude: shop.longitude,
        },
        { unit: "kilometer" }
      );

      let result = "";
      if (distance <= 1.0) result = "near";
      else if (distance > 1.0 && distance <= 3.0) result = "middle";
      else if (distance <= 8.0) result = "far";
      return result;
    },
    setOrder(field) {
      if (this.orders[field] === "asc") this.orders[field] = "desc";
      else this.orders[field] = "asc";
      this.orders.current = field;

      let requestData = {
        order: `${this.orders.current}$${this.orders[this.orders.current]}`,
        page: this.page,
      };
      for (const property in this.searchFilter) {
        requestData[property] = this.searchFilter[property];
      }

      console.log(this.searchFilter);
      console.log(requestData);

      axios.post("/getshop", requestData);
    },
  },
  computed: {
    ...mapState(["shops", "user", "searchFilter"]),
  },
  components: {
    PopupWindow,
    MenuPage,
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
      background: #b9b6b6;
      th {
        text-align: center;
        &.clickable {
          cursor: pointer;
        }
      }
    }
  }
  tbody {
    tr {
      background: #eeecec;
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
      .shop {
        @include flex-row;
        width: 500px;
        padding: 100px;
        align-content: space-between;
        div {
          flex-basis: calc(100% - 10px);
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
</style>