<template>
    <form>
      <label for='email'>E-mail →</label>
      <input :value="email" @input="updateEmail" type="email">
      <br><br>
      <label for='password'>Password →</label>
      <input :value="password" @input="updatePassword" type="password">
      <br><br>
      <button @click.stop.prevent="sendUserData" type='submit'>Send!</button>
      <p v-if="errorMessage">{{errorMessage}}</p>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      email: (state) => state.login.email,
      password: (state) => state.login.password,
      errorMessage: (state) => state.login.errorMessage,
    }),
  },
  methods: {
    ...mapActions('login', [
      'sendUserData',
      'updateEmail',
      'updatePassword',
    ]),
  },
};
</script>
