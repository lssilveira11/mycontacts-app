<template>
  <div>
    <div class="card" v-if="loading">
      <div class="card-body text-center py-5">
        <div class="spinner-border" role="status" >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <ul class="list-group" v-if="!loading">
      <li
        href="#"
        class="list-group-item"
        v-bind:key="c.id"
        v-for="c in contacts"
      >
        <contact-list-item
          :contact="c"
          @show-details="showDetails"
          @edit-contact="updateContact"
          @delete-contact="deleteContact"
        />
      </li>
      <li href="#" class="list-group-item d-none">
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
  </div>
</template>
  
<script>
import ContactListItem from "./ContactListItem";

export default {
  name: "ContactList",
  components: {
    ContactListItem
  },
  props: {
    contacts: Array,
  },
  computed: {
    loading(){
      return this.$store.getters.isLoading
    }
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