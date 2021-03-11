<template>
  <div>
    <contact-list-nav
      @search-changed="searchByName"
      @order-changed="changeOrder"
    ></contact-list-nav>
    <contact-list
      :contacts="computedContacts | filterByName(searchName)"
      @delete-contact="deleteContact"
    />
  </div>
</template>

<script>
import { bus } from "@/main";
import ContactList from "@/components/contacts/ContactList";
import ContactListNav from "@/components/contacts/ContactListNav";
import _ from "lodash";

export default {
  name: "Home",
  components: {
    ContactList,
    ContactListNav,
  },
  data() {
    return {
      searchName: "",
      order: "asc",
    };
  },
  computed: {
    contacts(){
      return this.$store.getters.contacts
    },
    computedContacts() {
      return _.orderBy(this.contacts, "name", this.order);
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
    changeOrder(order) {
      this.order = order;
    },
    searchByName(partialName) {
      this.searchName = partialName;
    },
  },
  filters: {
    filterByName(contacts, search) {
      // console.log("🚀 ~ file: Home.vue ~ line 138 ~ filterByName ~ search", search)

      return (
        contacts
          // first, filter contacts by name, using the search value
          .filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
          })
      );
    },
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
