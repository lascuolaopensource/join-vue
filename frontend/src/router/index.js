import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../features/home/routes';
import LoginWindow from '../features/login/routes';

Vue.use(VueRouter);

const routes = [
  ...Home,
  ...LoginWindow,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
