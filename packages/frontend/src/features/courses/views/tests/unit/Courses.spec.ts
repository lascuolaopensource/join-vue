import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';

import courses from '@/features/courses/store';

import Courses from '@/features/courses/views/Courses.vue';
import CoursesList from '@/features/courses/containers/CoursesList.vue';

const factory = () => shallowMount(Courses, {
  global: {
    provide: {
      store: createStore({
        modules: {
          courses,
        },
      }),
    },
  },
});

describe('Courses.vue', () => {
  it('renders the view', () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBeTruthy();
  });
  it('renders the list of courses once', () => {
    const wrapper = factory();
    expect(wrapper.findComponent(CoursesList).exists()).toBeTruthy();
  });
});
