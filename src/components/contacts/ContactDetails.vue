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
            :readonly="readonly"
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
            :readonly="readonly"
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
            :readonly="readonly"
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
    bus.on("header-save", this.saveContact);

    if (!this.readonly) {
      bus.emit("header-set-action", "save");
    }
    bus.emit("header-allow-back", true);
  },
  beforeDestroy(){
    bus.off("header-save", this.saveContact);
  },
  methods: {
    saveContact() {
      // creates the contact object
      let contact = {
        id: this.id || uuidv4(), // id will be generated, if doesnt exist
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      // create/update the contact
      if (this.action === "create") {
        this.$store.commit("createContact", contact);
      } else if (this.action === "update") {
        this.$store.commit("updateContact", contact);
      }

      // back do home screen
      this.$router.push({ name: "Home" })
        .catch(err=> {
          console.error("ERRO no push para Home", err)
        });
    },
  },
};
</script>