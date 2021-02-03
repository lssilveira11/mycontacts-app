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
import { bus } from "@/main";
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
  created() {
    if (!this.readonly) {
      bus.$emit("header-set-action", "save");
    }
    bus.$emit("header-allow-back", true);

    bus.$on("header-save", this.saveContact);
  },
  methods: {
    saveContact() {
      let contact = {
        id: this.id || uuidv4(),
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      if (this.action === "create") {
        this.$emit("create-contact", contact);
      } else if (this.action === "update") {
        this.$emit("update-contact", contact);
      }

      this.$router.push({ name: "Home" });
      
      // MUST DO THIS, otherwise this method will continue to be called from old instances, 
      // because Vue always creates a new Component every time the route changes
      bus.$off("header-save");
    },
  },
};
</script>