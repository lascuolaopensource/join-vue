<template>
  <div>
    <header>
      <top-bar :buttons="FirstLevelButtons"/>
      <top-bar :buttons="SecondLevelButtons"/>
    </header>
    <body>
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
      FirstLevelButtons: [{
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
      SecondLevelButtons: [{
        name: 'Dashboard',
        index: 'dashboard',
      },
      {
        name: 'I tuoi corsi',
        index: 'void',
      },
      {
        name: 'Dati personali',
        index: 'profile',
      },
      {
        name: 'Account',
        index: 'void',
      }],
    };
  },
  components: { TopBar },
});
</script>
