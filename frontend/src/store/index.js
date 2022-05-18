import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: null,
    shops: [],
    shop: null,
    meals: [],
    searchFilter: {},
    totalShopPage: null,
  },
  getters: {
    user: (state) => state.user,
    shops: (state) => state.shops,
    shop: (state) => state.shop,
    meals: (state) => state.meals,
    searchFilter: (state) => state.searchFilter,
    totalShopPage: (state) => state.totalShopPage,

  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    shops(state, shops) {
      state.shops = shops;
    },
    shop(state, shop) {
      state.shop = shop;
    },
    meals(state, meals) {
      state.meals = meals;
    },
    searchFilter(state, searchFilter) {
      state.searchFilter = searchFilter;
    },
    totalShopPage(state, totalShopPage) {
      state.totalShopPage = totalShopPage;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user);
    },
    shops(context, shops) {
      context.commit('shops', shops);
    },
    shop(context, shop) {
      context.commit('shop', shop);
    },
    meals(context, meals) {
      context.commit('meals', meals);
    },
    searchFilter(context, searchFilter) {
      context.commit('searchFilter', searchFilter);
    },
    totalShopPage(context, totalShopPage) {
      context.commit('totalShopPage', totalShopPage);
    }
  },
  modules: {
  }
})
