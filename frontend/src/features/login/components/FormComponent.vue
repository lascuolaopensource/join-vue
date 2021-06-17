<template>
    <form>
      <label for='email'>E-mail →</label>
      <input :value="email" @input="updateEmail" type="email">
      <br><br>
      <label for='password'>Password →</label>
      <input :value="password" @input="updatePassword" type="password">
      <br><br>
      <input v-on:click="sendUserData" type='submit' value='Submit'>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['email', 'password']),
  },
  methods: {
    ...mapActions(['sendUserData', 'updateEmail', 'updatePassword']),
  },
};
</script>
