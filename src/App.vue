<template>
  <div id="app" class="bg-light">
    <div class="container">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'

export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
</style>
