<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  created(){
    this.$store.dispatch('getContacts')
  }
};
</script>
