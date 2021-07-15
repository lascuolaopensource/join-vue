import Vue from 'vue';
import VueRouter from 'vue-router';

import Courses from '../features/courses/routes';
import Dashboard from '../features/dashboard/routes';
import Home from '../features/home/views/Home.vue';
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
  ...Dashboard,
  ...LoginWindow,
  ...UserProfile,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
