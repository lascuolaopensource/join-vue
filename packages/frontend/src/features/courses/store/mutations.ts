import { MutationTree } from 'vuex';
import { MutationTypes } from '@/mutation-types';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_COURSES](state: S, payload: Array<object>): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COURSES](state, payload: Array<object>) {
    state.courses = payload;
  },
};
