import Home from '../views/Home.vue';
import Courses from '../../courses/routes';
import Dashboard from '../../dashboard/routes';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...Courses,
      ...Dashboard,
    ],
  },
];
