<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm">
    <router-link to="/" class="navbar-brand">MyContacts</router-link>
    <button class="btn btn-outline-success my-2 my-sm-0" @click="btnClicked">
      {{ action === "new" ? "New Contact" : "Save" }}
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
      action: "new",
    };
  },
  methods: {
    btnClicked: function() {
      if (this.action === "new") {
        this.$router.push("newContact");
      }
      else if (this.action === "save") {
        this.$router.push("Home");
      }
    },
  },
  created() {
    console.info("App this router:", this.$router);
    console.info("App currentRoute:", this.$router.currentRoute);

    bus.$on("header-set-action", (action) => {
      this.action = action;
    });
  },
};
</script>