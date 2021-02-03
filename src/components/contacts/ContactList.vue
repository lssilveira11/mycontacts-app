<template>
  <ul class="list-group">
    <li
      href="#"
      class="list-group-item"
      v-bind:key="c.id"
      v-for="c in contacts"
    >
      <ContactListItem
        :contact="c"
        @show-details="showDetails"
        @edit-contact="updateContact"
        @delete-contact="deleteContact"
      />
    </li>
    <li href="#" class="list-group-item">
      <nav aria-label="Contact list page navigation">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </li>
  </ul>
</template>
  
<script>
import ContactListItem from "./ContactListItem";

export default {
  name: "ContactList",
  components: {
    ContactListItem,
  },
  props: {
    contacts: Array,
  },
  methods: {
    showDetails(contact) {
      this.$router.push({
        name: "Details",
        params: { contact: contact },
      });
    },
    updateContact(contact) {
      this.$router.push({
        name: "Update",
        params: { contact: contact },
      });
    },
    deleteContact(id) {
      this.$emit("delete-contact", id);
    },
  },
};
</script>