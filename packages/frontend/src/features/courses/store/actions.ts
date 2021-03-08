/* eslint-disable import/prefer-default-export */
import { ActionTypes } from '@/action-types';
import { MutationTypes } from '@/mutation-types';

export const actions = {
  [ActionTypes.FETCH_COURSES]({ commit }: { commit: Function }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [{ title: 'Title 1' }, { title: 'Title 2' }];
        commit(MutationTypes.SET_COURSES, data);
        resolve(data);
      }, 500);
    });
  },
};
