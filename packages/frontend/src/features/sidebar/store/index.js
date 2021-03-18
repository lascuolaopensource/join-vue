import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutation-types';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    isSidebarVisible: true,
    links: [
      { icon: 'mdi-book', name: 'courses', label: 'Courses' },
      { icon: 'mdi-account-multiple', name: 'users', label: 'Users' },
      { icon: 'mdi-calendar-multiple', name: 'events', label: 'Events' },
      { icon: 'mdi-projector-screen', name: 'projects', label: 'Projects' },
      { icon: 'mdi-laptop', name: 'hackerspace', label: 'Hackerspace' },
      { icon: 'mdi-lightbulb', name: 'ideas', label: 'Ideas' },
    ],
  },
  mutations: {
    [types.SET_SIDEBAR_VISIBILITY](state, isSidebarVisible) {
      state.isSidebarVisible = isSidebarVisible;
    },
  },
  actions: {
    setSidebarVisibility({ commit }, isSidebarVisibile) {
      commit(types.SET_SIDEBAR_VISIBILITY, isSidebarVisibile);
    },
    toggleSidebarVisibility({ state, commit }) {
      commit(types.SET_SIDEBAR_VISIBILITY, !state.isSidebarVisible);
    },
  },
  modules: {
  },
};
