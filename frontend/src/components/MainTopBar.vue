<template>
  <el-menu mode="horizontal" :default-active='activeIndex' active-text-color='#ff3300'>
    <el-menu-item index='1' @click="routeHome">Join</el-menu-item>
    <el-menu-item index='2' @click="routeCourses(el)">Corsi</el-menu-item>
    <el-menu-item index='3' @click="routeDashboard">{{username}}</el-menu-item>
    <el-menu-item index='4' @click="routeLogin">Esci</el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex';

export default ({
  state: {
    activeIndex: '1',
  },
  computed: {
    ...mapState({
      username: (state) => state.login.username,
      name: (state) => state.login.name,
      surname: (state) => state.login.surname,
    }),
  },
  methods: {
    routeCourses({ commit }, payload) {
      this.$router.push({ name: 'Courses' });
      commit('SET_ACTIVE_INDEX', payload);
    },
    routeDashboard() {
      this.$router.push({ name: 'Dashboard' });
    },
    routeHome() {
      this.$router.push({ name: 'Home' });
    },
    routeLogin() {
      this.$router.push({ name: 'Login' });
    },
  },
  mutations: {
    SET_ACTIVE_INDEX(state, payload) {
      state.activeIndex = payload;
    },
  },
});
</script>
