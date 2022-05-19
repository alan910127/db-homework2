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
    shopCount: null,
  },
  getters: {
    user: (state) => state.user,
    shops: (state) => state.shops,
    shop: (state) => state.shop,
    meals: (state) => state.meals,
    searchFilter: (state) => state.searchFilter,
    shopCount: (state) => state.shopCount,

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
    shopCount(state, shopCount) {
      state.shopCount = shopCount;
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
    shopCount(context, shopCount) {
      context.commit('shopCount', shopCount);
    }
  },
  modules: {
  }
})
