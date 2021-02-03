<template>
  <ContactList :contacts="contacts" />
</template>

<script>
import { bus } from "@/main";
import ContactList from "@/components/contacts/ContactList";

export default {
  name: "Home",
  components: {
    ContactList,
  },
  props: {
    contacts: Array,
  },
  created(){
    bus.$emit("header-set-action","new")
  }
};
</script>

<style>
</style>
