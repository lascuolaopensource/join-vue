<template>
  <div>
    <header>
      <top-bar :buttons="buttons"/>
    </header>
    <body>
      <router-view />
    </body>
    <footer>
    </footer>
  </div>
</template>

<script>
import TopBar from '../../../components/TopBar.vue';

export default ({
  data() {
    return {
      buttons: [{
        name: 'Join',
        index: '/',
      },
      {
        name: 'Corsi',
        index: 'courses',
      },
      {
        name: this.$store.state.login.username,
        index: 'dashboard',
      },
      {
        name: 'Esci',
        index: 'login',
      }],
    };
  },
  components: { TopBar },
});
</script>
