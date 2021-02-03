<template>
  <ContactList
    :contacts="contacts"
    v-on:delete-contact="deleteContact"
  />
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
  created() {
    bus.$emit("header-set-action", "new-contact");
  },
  methods: {
    deleteContact(id){
      this.$emit("delete-contact", id);
    }
  }
};
</script>

<style>
</style>
