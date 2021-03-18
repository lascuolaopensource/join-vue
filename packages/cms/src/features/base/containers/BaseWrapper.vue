<template>
  <div>
    <system-bar @toggleSidebarVisibility="toggleSidebarVisibility" :page-title="pageTitle" />
    <sidebar />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import SystemBar from '../../system-bar/components/SystemBar.vue';
import Sidebar from '../../sidebar/containers/Sidebar.vue';

export default {
  components: {
    Sidebar,
    SystemBar,
  },

  computed: {
    ...mapState('base', ['pageTitle']),
  },

  methods: {
    ...mapActions('sidebar', ['toggleSidebarVisibility']),
  },

};
</script>
