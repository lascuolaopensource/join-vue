import Vue from 'vue';
import { MutationTree } from 'vuex';
import { MutationTypes } from '@/types/mutation-types';
import { Course } from '@/types/Course';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_COURSES](state: S, payload: Array<object>): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COURSES](state, payload: Course[]) {
    state.courses = payload;
  },
};
