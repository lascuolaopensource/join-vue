<template>
  <div>
    <h1>Benvenuto {{name}} {{surname}} ({{username}})!</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      username: (state) => state.login.username,
      name: (state) => state.login.name,
      surname: (state) => state.login.surname,
    }),
  },
};
</script>
