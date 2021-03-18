<template>
  <v-app-bar color="" dark flat app>
    <v-btn @click="toggleSidebarVisibilityHandler" icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-toolbar-title>{{ $t(`${$route.name}PageTitle`) }} </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleSidebarVisibilityHandler() {
      this.$emit('toggleSidebarVisibility');
    },
  },
};
</script>
