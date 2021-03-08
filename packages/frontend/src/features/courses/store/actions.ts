import { ActionTree, ActionContext } from 'vuex';
import { ActionTypes } from '@/types/action-types';
import { MutationTypes } from '@/types/mutation-types';
import { fetchCourses } from '@/api/courses';
import { Course } from '@/types/Course';
import { Mutations } from './mutations';
import { State } from './state';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.FETCH_COURSES](
    { commit }: AugmentedActionContext,
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FETCH_COURSES]({ commit }) {
    try {
      console.log('BEFORE ACTION');
      const asd = await fetchCourses();
      console.log('AFTER ACTION');
      commit(MutationTypes.SET_COURSES, asd.data as Course[]);
    } catch (err) {
      console.log(err);
    }
  },
};
