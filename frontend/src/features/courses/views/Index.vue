<template>
  <div>
    <main-top-bar />
    <courses-list />
  </div>
</template>

<script>
import MainTopBar from '../../../components/MainTopBar.vue';
import CoursesList from '../containers/CoursesList.vue';

export default {
  components: { CoursesList, MainTopBar },
};
</script>
