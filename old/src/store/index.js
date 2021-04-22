import Vue from 'vue';
import Vuex from 'vuex';

import base from '../features/base/store';
import courses from '../features/courses/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    base,
    courses,
  },
});
