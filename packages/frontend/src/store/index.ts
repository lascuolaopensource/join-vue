import { createStore } from 'vuex';

import courses from '@/features/courses/store';

export default createStore({
  modules: {
    courses,
  },
});
