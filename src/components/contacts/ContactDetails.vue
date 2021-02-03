<template>
  <div class="card">
    <div class="card-body rounded-bottom">
      <div class="form-group">
        <label for="contactName">Name</label>
        <input type="text" name="contactName" id="contactName"
        v-bind:class="[readonly ? 'form-control-plaintext' : 'form-control']"
        v-model="name" />
      </div>
      <div class="form-group">
        <label for="contactName">Email</label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          v-bind:class="[readonly ? 'form-control-plaintext' : 'form-control']"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="contactName">Phone</label>
        <input
          type="text"
          name="contactPhone"
          id="contactPhone"
          v-bind:class="[readonly ? 'form-control-plaintext' : 'form-control']"
          v-model="phone"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  components: {},
  props: {
    readonly: Boolean,
    contact: Object,
  },
  created() {
    console.log(this.contact);
  },
};
</script>