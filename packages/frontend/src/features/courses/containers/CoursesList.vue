<template>
  <h2>Courses List</h2>
  {{ courses }}
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { ActionTypes } from '@/action-types';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'CoursesList',

  setup() {
    const store = useStore();
    const courses = computed(() => store.state.courses.courses);

    async function fetchCourses() {
      await store.dispatch(`courses/${ActionTypes.FETCH_COURSES}`);
    }

    onMounted(fetchCourses);

    return {
      courses,
    };
  },
});
</script>
