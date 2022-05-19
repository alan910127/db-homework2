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
          <td>{{ Math.round(getDistance(shop)) }} m</td>
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
      <li
        v-for="i in Math.ceil(shopCount / 5)"
        :key="i"
        @click="setPage(i)"
        :class="i === page ? 'current' : ''"
      >
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
    this.$store.dispatch("shopCount", 0);
  },
  data() {
    return {
      page: 1,
      totalShopNumber: 0,
      orders: {
        shopname: "",
        category: "",
        distance: "",
        current: null,
      },
    };
  },
  methods: {
    async setPage(pagenumber) {
      this.page = pagenumber;

      const response = await axios.post("/getshop", {
        shopname: this.searchFilter.shopname,
        distance: this.searchFilter.distance,
        pricelow: this.searchFilter.pricelow,
        pricehigh: this.searchFilter.pricehigh,
        meal: this.searchFilter.meal,
        category: this.searchFilter.category,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
        order: this.searchFilter.order,
        page: this.page,
      });
      this.$store.dispatch("shops", response.data.shops);
      this.$store.dispatch("shopCount", response.data.count);
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

      return distance * 1000;
    },
    async setOrder(field) {
      if (this.orders[field] === "asc") this.orders[field] = "desc";
      else this.orders[field] = "asc";
      this.orders.current = field;
      this.searchFilter.order = `${this.orders.current}$${
        this.orders[this.orders.current]
      }`;
      console.log(`${this.orders.current}$${this.orders[this.orders.current]}`);
      const response = await axios.post("/getshop", {
        shopname: this.searchFilter.shopname,
        distance: this.searchFilter.distance,
        pricelow: this.searchFilter.pricelow,
        pricehigh: this.searchFilter.pricehigh,
        meal: this.searchFilter.meal,
        category: this.searchFilter.category,
        latitude: this.user.latitude,
        longitude: this.user.longitude,
        order: this.searchFilter.order,
        page: 1,
      });
      this.$store.dispatch("shops", response.data.shops);
      this.$store.dispatch("shopCount", response.data.count);
      this.$store.dispatch("searchFilter", this.searchFilter);
    },
  },
  computed: {
    ...mapState(["shops", "user", "searchFilter", "shopCount"]),
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
    color: var(--text-color);
    font-weight: 300;
    &.current {
      color: var(--info-color);
      font-weight: 800;
    }
  }
}
</style>