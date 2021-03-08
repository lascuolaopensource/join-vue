import { shallowMount } from '@vue/test-utils';
import nock from 'nock';
import config from '@/config';

import CoursesList from '@/features/courses/containers/CoursesList.vue';

const scope = nock('http://localhost:8000/api/v1').defaultReplyHeaders({
  'access-control-allow-origin': '*',
  'access-control-allow-credentials': 'true',
}).get('/courses')
  .reply(200, { courses: [{ id: '1', title: 'Course title 1' }] });

const factory = async () => shallowMount(CoursesList, {});

describe('CoursesList.vue', () => {
  it('renders the view', async () => {
    const wrapper = await factory();
    console.log(scope.isDone());
    expect(wrapper.exists()).toBeTruthy();
  });
  it('renders the list of courses once', async (done) => {
    const wrapper = await factory();
    await wrapper.vm.$forceUpdate();
    await wrapper.vm.$nextTick(() => {
      console.log(wrapper.vm.courses);
      console.log(scope.isDone());
      done();
    });
  });
});
