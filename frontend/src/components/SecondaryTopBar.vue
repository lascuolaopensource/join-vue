<template>
  <el-menu mode="horizontal">
    <el-menu-item index='1'>Dashboard</el-menu-item>
    <el-menu-item index='2'>I tuoi corsi</el-menu-item>
    <el-menu-item index='3' @click="routeProfile">Dati personali</el-menu-item>
    <el-menu-item index='4'>Account</el-menu-item>
  </el-menu>
</template>

<script>
export default ({
  methods: {
    routeProfile() {
      this.$router.push({ name: 'Profile' });
    },
  },
});
</script>
