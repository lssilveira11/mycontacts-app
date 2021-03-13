<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm">
    <button
      class="btn btn-sm btn-outline-light"
      v-if="allowBack"
      @click="backClicked"
    >
      Back
    </button>
    <router-link to="/" class="navbar-brand">{{ title }}</router-link>
    <button class="btn btn-sm btn-success" @click="primaryClicked" data-cy="default-btn">
      {{ action === "new-contact" ? "New Contact" : "Save" }}
    </button>
  </nav>
</template>

<script>
import { bus } from "@/main";

export default {
  name: "Header",
  components: {},
  data() {
    return {
      title: "MyContacts",
      action: "new-contact",
      allowBack: false,
    };
  },
  methods: {
    primaryClicked: function () {
      if (this.action === "new-contact") {
        this.$router.push({ name: "Create" });
      } else if (this.action === "save") {
        bus.emit("header-save");
      }
    },
    backClicked: function () {
      this.$router.back();
    },
    setAction(action) {
      this.action = action;
    },
    setAllowBack(allowBack) {
      this.allowBack = allowBack;
    },
  },
  created() {
    bus.on("header-set-action", this.setAction);
    bus.on("header-allow-back", this.setAllowBack);
  },
  beforeDestroy(){
    bus.off("header-set-action", this.setAction);
    bus.off("header-allow-back", this.setAllowBack);    
  },
};
</script>