<template>
  <div>
    <router-view />
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
