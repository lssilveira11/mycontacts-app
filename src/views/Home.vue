<template>
  <div>
    <nav class="navbar navbar-light bg-secondary">
      <div class="form-group my-0 w-50">
        <input
          class="form-control"
          type="search"
          placeholder="Search by name..."
          aria-label="Search"
          v-model="searchValue"
        />
      </div>
      <button
        type="button"
        class="btn btn-dark"
        v-if="order === 'desc'"
        @click="toggleSort"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-sort-alpha-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
          ></path>
          <path
            d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"
          ></path>
        </svg>
        <span class="sr-only">Sort Ascendent</span>
      </button>
      <button
        type="button"
        class="btn btn-dark"
        v-if="order === 'asc'"
        @click="toggleSort"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-sort-alpha-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
          ></path>
          <path
            d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"
          ></path>
        </svg>
        <span class="sr-only">Sort Decrescent</span>
      </button>
    </nav>
    <ContactList
      :contacts="computedContacts | filterByName(searchValue)"
      v-on:delete-contact="deleteContact"
      :loading="loading"
    />
  </div>
</template>

<script>
import { bus } from "@/main";
import ContactList from "@/components/contacts/ContactList";
import _ from 'lodash';

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
      order: "asc",
    };
  },
  computed: {
    computedContacts() {
      return (
        _.orderBy(this.contacts, 'name', this.order)
      );
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
    toggleSort() {
      this.order = (this.order === "asc") ?  "desc" : "asc";
    },
  },
  filters:{
    filterByName(contacts, search){
      // console.log("🚀 ~ file: Home.vue ~ line 138 ~ filterByName ~ search", search)

      return contacts
          // first, filter contacts by name, using the search value
          .filter((item) => {
            return (
              item.name.toLowerCase().indexOf(search.toLowerCase()) >
              -1
            );
          });
    }
  },
  // watch: {
  //   order: function () {
  //     console.log("order", this.order);
  //   },
  // },
};
</script>

<style>
</style>
