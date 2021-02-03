<template>
  <div class="row no-gutters align-items-center">
    <div class="col-8 col-sm-9">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col">
          {{ contact.name }}
        </div>
        <div class="col">
          <small class="d-block">{{ contact.phone }}</small>
        </div>
      </div>
    </div>
    <div class="col-4 col-sm-3 text-right">
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button class="btn btn-outline-secondary" @click="showDetails(contact)">
          Details
        </button>

        <div class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-outline-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a
              class="dropdown-item"
              href="#"
              @click.prevent="updateContact(contact)"
              >Edit</a
            >
            <a
              class="dropdown-item text-danger"
              href="#"
              @click.prevent="deleteContact(contact.id)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  components: {},
  props: {
    contact: Object,
  },
  methods: {
    showDetails: function (contact) {
      this.$emit("show-details", contact);
    },
    updateContact: function (contact) {
      this.$emit("edit-contact", contact);
    },
    deleteContact: function (id) {
      this.$emit("delete-contact", id);
    },
  },
};
</script>