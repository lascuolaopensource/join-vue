import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../features/home/views/Home.vue';
import Courses from '../features/courses/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Courses,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
