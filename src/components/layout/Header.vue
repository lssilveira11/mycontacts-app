<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm">
    <router-link to="/" class="navbar-brand">MyContacts</router-link>
    <router-link to="/newContact" class="btn btn-outline-success my-2 my-sm-0">New Contact</router-link>
    <router-link to="/" class="btn btn-outline-success my-2 my-sm-0" v-if="false" @click="saveContact">Save</router-link>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
    }
  },
  methods:{
    saveContact: () => {

    }
  },
  created() {
    console.info('App this router:', this.$router)
    console.info('App currentRoute:', this.$router.currentRoute)
  }
}
</script>