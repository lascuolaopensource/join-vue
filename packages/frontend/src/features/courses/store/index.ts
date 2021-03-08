import { state } from '@/features/courses/store/state';
import { mutations } from '@/features/courses/store/mutations';
import { actions } from '@/features/courses/store/actions';

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
