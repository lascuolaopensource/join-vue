import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
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
  },
  actions: {
  },
  modules: {
  },
};
