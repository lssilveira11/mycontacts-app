<template>
  <nav class="navbar navbar-dark bg-dark shadow-sm">
    <button
      class="btn btn-sm btn-outline-light"
      v-if="allowBack"
      @click="backClicked"
    >
      Back
    </button>
    <router-link to="/" class="navbar-brand w-25">{{ title }}</router-link>
    <button class="btn btn-sm btn-outline-success" @click="btnClicked">
      {{ action === "new-contact" ? "New Contact" : "Save" }}
    </button>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      title: "MyContacts",
      action: "new-contact"
    };
  },
  computed:{
    allowBack: function() {
      return !!this.$route.params.action;
    },
  },
  methods: {
    btnClicked: function () {
      this.$emit("header-btn-clicked", { 
          action: this.action
      });

      if (this.action === "new-contact") {
        this.action = 'save';       
      } else if (this.action === "save") {
        this.action = 'new-contact';
      }
    },
    backClicked: function () {
      this.action = 'new-contact';      
      this.$router.back(); // returns to the previous route
    },
  },
};
</script>