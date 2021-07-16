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
  created() {
    // update the value of the button name
    // with the computed property that has just
    // been initialized
    this.buttons[2].name = this.username;
  },
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
        name: '',
        index: 'dashboard',
      },
      {
        name: 'Esci',
        index: 'login',
      }],
    };
  },
  components: { TopBar },
  computed: {
    username() {
      console.log('now username gets computed!');
      return this.$store.state.login.username;
    },
  },
});
</script>
