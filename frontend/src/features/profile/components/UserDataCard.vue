<template>
  <div>
    <p>Nome: {{name}}</p>
    <p>Cognome: {{surname}}</p>
    <p>Username: {{username}}</p>
    <el-button @click="$emit('switch-component')">
      Modifica i tuoi dati
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.login.name,
      surname: this.$store.state.login.surname,
      username: this.$store.state.login.username,
    };
  },
};
</script>
