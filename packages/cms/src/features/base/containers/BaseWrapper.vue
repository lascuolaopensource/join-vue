<template>
  <div>
    <system-bar :page-title="pageTitle" />
    <sidebar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import SystemBar from '../../system-bar/components/SystemBar.vue';
import Sidebar from '../../sidebar/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
    SystemBar,
  },

  computed: {
    ...mapState('base', ['pageTitle']),
  },
};
</script>
