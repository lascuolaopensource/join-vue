<template>
  <div>
    <div>
      <el-button type='text'
        @click="$emit('switch-component')">
        ← Torna indietro
      </el-button>
    </div>
    <div>
      <el-form label-position='left' label-width='auto'>
      <el-form-item label="Nome">
        <el-input v-model="newName"></el-input>
      </el-form-item>
      <el-form-item label="Cognome">
        <el-input v-model="newSurname"></el-input>
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="newUsername"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Salva
        </el-button>
      </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      newName: this.$store.state.login.name,
      newSurname: this.$store.state.login.surname,
      newUsername: this.$store.state.login.username,
    };
  },
  methods: {
    ...mapActions('login', [
      'updateName',
      'updateSurname',
      'updateUsername',
    ]),
    onSubmit() {
      this.updateName(this.newName);
      this.updateSurname(this.newSurname);
      this.updateUsername(this.newUsername);
    },
  },
};
</script>
