<template>
  <div class="row justify-content-between align-items-center">
    <div class="col-auto">
      <h5>{{ contact.name }}</h5>
      <small class="d-block">{{ contact.email }}</small>
      <small class="d-block">{{ contact.phone }}</small>
    </div>
    <div class="col-auto">
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <router-link to="contactDetails" class="btn btn-outline-secondary">Details</router-link>

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
            <router-link to="/editContact" class="dropdown-item"
              >Edit</router-link
            >
            <a
              class="dropdown-item text-danger"
              href="#"
              @click.prevent="$emit('delete-contact', contact.id)"
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
  methods: {},
};
</script>