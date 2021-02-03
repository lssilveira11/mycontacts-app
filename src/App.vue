<template>
  <div id="app" class="container">
    <Header />
    <ContactList />
  </div>
</template>

<script>
import Header from './components/layout/Header'
import ContactList from './components/contacts/ContactList'

export default {
  name: "App",
  components: {
    Header,
    ContactList
  },
};
</script>

<style>
</style>
