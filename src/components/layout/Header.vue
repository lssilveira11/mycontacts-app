<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm">
    <button
      class="btn btn-outline-light my-2 my-sm-0"
      v-if="allowBack"
      @click="backClicked"
    >
      Back
    </button>
    <router-link to="/" class="navbar-brand">{{ title }}</router-link>
    <button class="btn btn-outline-success my-2 my-sm-0" @click="btnClicked">
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
    btnClicked: function () {
      if (this.action === "new-contact") {
        this.$router.push({ name: "Create" });
      } else if (this.action === "save") {
        bus.$emit("header-save");
      }
    },
    backClicked: function () {
      this.$router.back();
    },
  },
  created() {
    // console.info("App this router:", this.$router);
    // console.info("App currentRoute:", this.$router.currentRoute);

    bus.$on("header-set-action", (action) => {
      this.action = action;
    });

    bus.$on("header-allow-back", (allowBack) => {
      this.allowBack = allowBack;
    });
  },
};
</script>