<template>
  <ContactList :contacts="contacts" />
</template>

<script>
import ContactList from '@/components/contacts/ContactList'

export default {
  name: "Home",
  components: {
    ContactList
  },
  props: {
    contacts: Array
  }
};
</script>

<style>
</style>
