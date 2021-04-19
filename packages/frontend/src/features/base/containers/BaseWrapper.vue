<template>
  <div>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState('base', ['pageTitle']),
  },

};
</script>
