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
