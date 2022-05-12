import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: null,
    shops: [],
    shopname: null
  },
  getters: {
    user: (state) => state.user,
    shops: (state) => state.shops,
    shopname: (state) => state.shopname
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    shops(state, shops) {
      state.shops = shops;
    },
    shopname(state, shopname) {
      state.shopname = shopname;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user);
    },
    shops(context, shops) {
      context.commit('shops', shops);
    },
    shopname(context, shopname) {
      context.commit('shopname', shopname);
    }
  },
  modules: {
  }
})
