<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th class="clickable" @click="setOrder('shopname')">Shop Name</th>
          <th class="clickable" @click="setOrder('category')">Category</th>
          <th class="clickable" @click="setOrder('distance')">Distance</th>
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
    <ul class="page-bar">
      <li v-for="i in totalShopNumber" :key="i" @click="setPage(i)">
        {{ i }}
      </li>
    </ul>
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
      totalShopNumber: 0,
      orders: {
        shopname: "asc",
        category: "asc",
        distance: "asc",
        current: null,
      },
    };
  },
  methods: {
    setPage(pagenumber) {
      this.page = pagenumber;
      this.setOrder();
    },
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
      else result = "unavailable";

      return result;
    },
    async setOrder(field) {
      if (this.orders[field] === "asc") this.orders[field] = "desc";
      else this.orders[field] = "asc";
      this.orders.current = field;
      console.log("enter");
      const response = await axios.post("/getshop", {
        shopname: this.searchFilter.shopname,
        distance: this.searchFilter.distance,
        pricelow: this.searchFilter.pricelow,
        pricehigh: this.searchFilter.pricehigh,
        meal: this.searchFilter.meal,
        category: this.searchFilter.category,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
        order: `${this.orders.current}$${this.orders[this.orders.current]}`,
        page: this.page,
      });
      console.log(response);
      this.$store.dispatch("shops", response.data.shopData);
      this.$store.dispatch("totalShopPage", response.data.actualPages);
    },
  },
  computed: {
    ...mapState(["shops", "user", "searchFilter", "totalShopPage"]),
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

.page-bar {
  margin-left: auto;
  @include flex-row;
  align-self: center;
  align-content: space-around;
  gap: 2rem;
  li {
    list-style: none;
    cursor: pointer;
  }
}
</style>