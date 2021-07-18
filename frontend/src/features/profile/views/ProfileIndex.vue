<template>
  <component
  :is="currentComponent"
  v-on:switch-component="switchComponent">
  </component>
</template>

<script>
import UserCard from '../components/UserDataCard.vue';
import ModifyUserData from '../containers/ModifyUserDataCard.vue';

export default {
  components: { UserCard, ModifyUserData },
  computed: {
    currentComponent() {
      return this.enableModification ? 'ModifyUserData' : 'UserCard';
    },
  },
  data() {
    return {
      enableModification: false,
    };
  },
  methods: {
    switchComponent() {
      this.enableModification = !this.enableModification;
    },
  },
  name: 'ProfileIndex',
};
</script>
