<template>
  <div id="app">
    <div class="container">
      <Header />
      <router-view
        :contacts="contacts"
        :loading="loading"
        v-on:create-contact="createContact"
        v-on:update-contact="updateContact"
        v-on:delete-contact="deleteContact"
      ></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/layout/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      contacts: [],
      loading: true
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.loading = false;
        return (this.contacts = res.data);
      })
      .catch((err) => {
        console.log("🚀 ~ file: App.vue ~ line 56 ~ data ~ err", err);
      });
  },
  methods: {
    createContact(contact) {
      console.log(
        "🚀 ~ file: App.vue ~ line 32 ~ createContact ~ contact",
        contact
      );
      this.contacts = [...this.contacts, Object.assign({}, contact)];
    },
    updateContact(contact) {
      console.log(
        "🚀 ~ file: App.vue ~ line 35 ~ updateContact ~ (contact)",
        contact
      );
      const idx = this.contacts.findIndex((c) => c.id == contact.id);
      console.log("🚀 ~ file: App.vue ~ line 41 ~ updateContact ~ idx", idx);
      this.contacts[idx].name = contact.name;
      this.contacts[idx].email = contact.email;
      this.contacts[idx].phone = contact.phone;
    },
    deleteContact(id) {
      console.log("🚀 ~ file: App.vue ~ line 46 ~ deleteContact ~ id", id);
      // console.log(id);
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
};
</script>

<style>
</style>
