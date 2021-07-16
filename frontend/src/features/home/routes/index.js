import Home from '../views/Home.vue';
import Courses from '../../courses/views/CoursesIndex.vue';
import Dashboard from '../../dashboard/views/DashboardIndex.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'courses',
        component: Courses,
        name: 'Courses',
      },
      {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard',
      },
    ],
  },
];
