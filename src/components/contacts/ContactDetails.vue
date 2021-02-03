<template>
  <div class="card">
    <div class="card-body rounded-bottom">
      <div class="form-group">
        <label for="contactName">Name</label>
        <input
          type="text"
          name="contactName"
          id="contactName"
          :class="[readonly ? 'form-control-plaintext' : 'form-control']"
          :value="name"
        />
      </div>
      <div class="form-group">
        <label for="contactName">Email</label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          :class="[readonly ? 'form-control-plaintext' : 'form-control']"
          :value="email"
        />
      </div>
      <div class="form-group">
        <label for="contactName">Phone</label>
        <input
          type="text"
          name="contactPhone"
          id="contactPhone"
          :class="[readonly ? 'form-control-plaintext' : 'form-control']"
          :value="phone"
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
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  created() {
    console.log(this.contact);
  },
};
</script>