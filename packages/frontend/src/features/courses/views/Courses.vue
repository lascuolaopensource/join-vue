<template>
  <div class="courses">
    <h1>Courses</h1>
    <CoursesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CoursesList from '@/features/courses/containers/CoursesList.vue';

export default defineComponent({
  name: 'Courses',
  components: {
    CoursesList,
  },
});
</script>
