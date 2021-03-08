<template>
  <h2>Courses List</h2>
  {{ courses }}
</template>

<script lang="ts">
import {
  defineComponent, onMounted,
} from 'vue';

import useCourses from '@/api/courses';

export default defineComponent({
  name: 'CoursesList',

  setup() {
    const { courses, getCourses } = useCourses();
    onMounted(async () => getCourses());
    return { courses };
  },
});
</script>
