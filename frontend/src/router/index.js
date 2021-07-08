import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../features/home/views/Home.vue';
import Courses from '../features/courses/routes';
import LoginWindow from '../features/login/routes';
import UserProfile from '../features/profile/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Courses,
  ...LoginWindow,
  ...UserProfile,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
