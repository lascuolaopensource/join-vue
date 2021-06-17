import Vue from 'vue';
import Vuex from 'vuex';
import login from '../features/login/store';

Vue.use(Vuex);

const moduleB = {
  state: () => ({ ciao: 'ciao' }),
  mutations: {},
  actions: {},
  namespaced: true,
};

export default new Vuex.Store({
  state: {
  },
  modules: {
    ciao: moduleB,
    ...login,
  },
  actions: {
  },
  mutations: {
  },
});
