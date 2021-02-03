<template>
  <div>
    <nav class="navbar navbar-light bg-secondary">
      <form class="form-inline">
        <input
          class="form-control"
          type="search"
          placeholder="Search by name..."
          aria-label="Search"
          v-model="searchValue"
        />
      </form>
    </nav>
    <ContactList
      :contacts="filteredContacts"
      v-on:delete-contact="deleteContact"
      :loading="loading"
    />
  </div>
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
    loading: Boolean,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
        );
      });
    },
  },
  created() {
    bus.$emit("header-set-action", "new-contact");
    bus.$emit("header-allow-back", false);
  },
  methods: {
    deleteContact(id) {
      this.$emit("delete-contact", id);
    },
  },
};
</script>

<style>
</style>
