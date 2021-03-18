<template>
  <v-navigation-drawer v-model="isSidebarVisible" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          JOIN
        </v-list-item-title>
        <v-list-item-subtitle>
          CMS
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list>
      <v-list-item v-for="{ icon, name, label } in links" :key="icon" :to="name" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('sidebar', ['links']),
    isSidebarVisible: {
      get() {
        return this.$store.state.sidebar.isSidebarVisible;
      },
      set(isSidebarVisible) {
        this.$store.dispatch('sidebar/setSidebarVisibility', isSidebarVisible);
      },
    },
  },

};
</script>
