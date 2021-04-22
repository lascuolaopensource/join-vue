<template>
  <div>
    {{ courses }}
    <table>
      <tr>
        <th v-for="(tableHeader, idx) of tableHeaders" :key="`tableHeader-${idx}`">
          {{ tableHeader }}
        </th>
      </tr>
      <tr v-for="(course, idx) of courses" :key="idx">
        <td v-for="(field, idx) of tableHeaders" :key="`field-${idx}`">{{ course[field] }}</td>
      </tr>
    </table>
    <pre>
    </pre>
  </div>
</template>

<script>
import { GET_COURSES } from '../queries';

export default {
  apollo: {
    courses: GET_COURSES,
  },
  data() {
    return {
      tableHeaders: ['id', 'title', 'type', 'difficulty_level', 'price', 'description', 'teachers'],
      courses: [],
    };
  },
  mounted() {
    console.log(this.$apollo);
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
