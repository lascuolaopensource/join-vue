import Dashboard from '../views/DashboardIndex.vue';
import UserProfile from '../../profile/routes';

export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      ...UserProfile,
    ],
  },
];
