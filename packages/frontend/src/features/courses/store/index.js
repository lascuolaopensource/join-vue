import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    tableHeaders: [
      { text: 'Title', value: 'title' },
      { text: 'From', value: 'from' },
      { text: 'To', value: 'to' },
      { text: 'Url', value: 'url' },
      { text: 'Subscriptions', value: 'subscriptions' },
      { text: 'Teachers', value: 'teachers' },
    ],
    openCourses: [
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 100,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 10,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 23,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 50,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 40,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
      {
        name: 'Lorem ipsum',
        from: '10.10.2010 15:30',
        to: '15.11.2010 18:30',
        url: 'sos.join/just-a-url',
        subscriptions: 80,
        teachers: ['Foo', 'Bar', 'Alessandro'],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
};
