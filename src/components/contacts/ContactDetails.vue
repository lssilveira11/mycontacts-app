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
            v-model="name"
          />
        </div>
        <div class="col form-group">
          <label for="contactName" class="text-muted">Email</label>
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            :class="[readonly ? 'form-control-plaintext' : 'form-control']"
            v-model="email"
          />
        </div>
        <div class="col form-group">
          <label for="contactName" class="text-muted">Phone</label>
          <input
            type="text"
            name="contactPhone"
            id="contactPhone"
            :class="[readonly ? 'form-control-plaintext' : 'form-control']"
            v-model="phone"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ContactDetails",
  components: {},
  props: {
    readonly: Boolean,
    action: String,
  },
  data() {
    if (this.$route.params.contact) {
      return Object.assign({}, this.$route.params.contact);
    }

    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  created(){
    let contact = {
      id: this.id || uuidv4(),
      name: this.name,
      email: this.email,
      phone: this.phone,
    };

    this.$root.contact = contact;
  }
};
</script>