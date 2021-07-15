<template>
  <div>
    <el-menu mode="horizontal" router=true>
      <el-menu-item
        v-for="button in buttons"
        :key="button.index"
        :index="button.index"
      >{{button.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    buttons: Array,
  },
  setup() {
  },
};
</script>
