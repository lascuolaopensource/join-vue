<template>
  <ul>
    <li v-for="(course, idx) of courses" :key="idx">{{ course.title }}</li>
  </ul>
</template>

<script>
// import { mapState } from 'vuex';
import gql from 'graphql-tag';

export default {
  apollo: {
    courses: gql`query {
      courses {
        id
        title
      }
    }`,
  },
  data() {
    return {
      tableHeaders: ['id', 'title'],
      courses: [],
    };
  },
  methods: {
    getColor(subscriptions) {
      if (subscriptions > 80) return 'green';
      if (subscriptions > 40) return 'orange';
      return 'red';
    },
  },
};
</script>
