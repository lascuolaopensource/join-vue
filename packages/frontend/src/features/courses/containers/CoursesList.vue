<template>
  <v-data-table
    :headers="tableHeaders"
    :items="openCourses"
    class="elevation-1"
  >
    <template v-slot:[`item.subscriptions`]="{ item }">
    <v-chip
      :color="getColor(item.subscriptions)"
      dark
    >
      {{ item.subscriptions }}
    </v-chip>
  </template>
  </v-data-table>
</template>

<script>
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState('courses', ['tableHeaders', 'openCourses']),
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
