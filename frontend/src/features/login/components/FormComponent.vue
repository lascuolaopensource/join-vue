<template>
    <form>
      <label for='email'>E-mail →</label>
      <input :value="email" @input="updateEmail" type="email">
      <br><br>
      <label for='password'>Password →</label>
      <input :value="password" @input="updatePassword" type="password">
      <br><br>
      <button @click.stop.prevent="submit()" v-on:click="sendUserData" type='submit'>Send!</button>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      email: (state) => state.email,
      password: (state) => state.password,
    }),
  },
  methods: {
    ...mapActions('login', [
      'sendUserData',
      'updateEmail',
      'updatePassword',
    ]),
    submit() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
