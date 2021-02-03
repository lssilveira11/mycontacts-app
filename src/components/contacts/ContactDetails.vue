<template>
  <div class="card">
    <div class="card-body rounded-bottom">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col form-group">
          <label for="contactName" class="text-muted">Name</label>
          <input
            type="text"
            name="contactName"
            id="contactName"
            :class="[readonly ? 'form-control-plaintext' : 'form-control']"
            :value="name"
          />
        </div>
        <div class="col form-group">
          <label for="contactName" class="text-muted">Email</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            :class="[readonly ? 'form-control-plaintext' : 'form-control']"
            :value="email"
          />
        </div>
        <div class="col form-group">
          <label for="contactName" class="text-muted">Phone</label>
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
  </div>
</template>

<script>
import { bus } from "@/main";

export default {
  name: "ContactDetails",
  components: {},
  props: {
    readonly: Boolean,
    contact: Object,
  },
  data() {
    return (
      this.$route.params.contact || {
        name: "",
        email: "",
        phone: "",
      }
    );
  },
  created() {
    if (!this.readonly) {
      bus.$emit("header-set-action", "save");
    }
  },
};
</script>