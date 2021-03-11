<template>
  <div>
    <contact-list-nav
      @search-changed="searchByName"
      @order-changed="changeOrder"
    ></contact-list-nav>
    <contact-list
      :contacts="computedContacts | filterByName(searchName)"
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
  created() {
    bus.emit("header-set-action", "new-contact");
    bus.emit("header-allow-back", false);
  },
  data() {
    return {
      searchName: "",
      order: "asc",
    };
  },
  computed: {
    contacts(){
      return this.$store.getters.getContacts
    },
    computedContacts() {
      return _.orderBy(this.contacts, "name", this.order);
    },
  },
  methods: {
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
      if (!search)
        return contacts;

      // filter contacts by name, using the search value
      return (
        contacts
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
