import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapse: false
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.collapse = !state.collapse;
    }
  },
  actions: {
    ToggleSideBar: ctx => {
      ctx.commit("TOGGLE_SIDEBAR");
    }
  }
});
