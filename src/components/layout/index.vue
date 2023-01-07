<template>
  <div>layout</div>

  <!-- 在全局layout组件中加入router-view是为了让layout组件可以渲染子路由 -->
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
