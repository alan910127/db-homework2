<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Shop Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in shops" :key="index" class="shop">
          <td>{{ index + 1 }}</td>
          <td>{{ shop.shopname }}</td>
          <td>
            <popup-window v-if="showPopup" @closePopup="showPopup = false">
              <menu-page :shop="shop"></menu-page>
            </popup-window>
            <button @click="showPopup = true">Show Popup</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PopupWindow from "@/components/PopupWindow.vue";
import MenuPage from "@/components/MenuPage.vue";

export default {
  computed: {
    ...mapState(["shops"]),
  },
  components: {
    PopupWindow,
    MenuPage,
  },
  data() {
    return { showPopup: false };
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