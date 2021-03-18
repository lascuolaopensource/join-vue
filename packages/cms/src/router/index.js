import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Courses from '../features/courses/routes';
import Users from '../features/users/routes';
import Events from '../features/events/routes';
import Projects from '../features/projects/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...Courses,
  ...Users,
  ...Events,
  ...Projects,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
