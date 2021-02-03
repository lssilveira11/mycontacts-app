<template>
  <div>
    <nav class="navbar navbar-light bg-secondary">
      <form class="form-inline">
        <div class="input-group">
          <input
            class="form-control"
            type="search"
            placeholder="Search by name..."
            aria-label="Search"
            v-model="searchValue"
          />
          <div class="input-group-append">
            <button class="btn btn-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
    <ContactList :contacts="filteredContacts" v-on:delete-contact="deleteContact" />
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
  },
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((item) => {
        return item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1;
      });
    },
  },
  created() {
    bus.$emit("header-set-action", "new-contact");
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
