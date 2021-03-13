import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

import { contactsCollection } from './firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contacts: [],
    loadingState: false
  },
  mutations: {
    setLoading(state) {
      state.loadingState = true
    },
    unsetLoading(state) {
      state.loadingState = false
    },
    setContacts(state, contacts) {
      state.contacts = contacts
    },
    createContact(state, contact) {
      state.contacts.push(contact)
    },
    updateContact(state, contact) {
      const idx = state.contacts.findIndex((c) => c.id == contact.id);
      state.contacts[idx].name = contact.name;
      state.contacts[idx].email = contact.email;
      state.contacts[idx].phone = contact.phone;
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter((c) => c.id !== id);
    }
  },
  actions: {
    getContacts(context) {
      context.commit('setLoading');
      // return axios.get("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => {
      //     context.commit('setContacts', res.data);
      //   })
      return contactsCollection.get()
        .then((docRefs) => {

          let data = [];

          docRefs.forEach((doc) => {
            data.push(Object.assign({ id: doc.id }, doc.data()))
          })

          context.commit("setContacts", data)
        })
        .catch((err) => {
          console.error("Error fetching contacts data.", err);
        })
        .finally(() => {
          context.commit('unsetLoading');
        });
    },
    createContact(context, contactData) {
      context.commit("setLoading");

      return contactsCollection.add(contactData)
        .then((docRef) => {
          context.commit("createContact", Object.assign({ id: docRef.id }, contactData));
        })
        .catch((err) => {
          console.error("Error creating new contact.", err);
        })
        .finally(() => {
          context.commit("unsetLoading");
        });
    },
    updateContact(context, { id, contactData }) {
      context.commit("setLoading");

      return contactsCollection.doc(id).update(contactData)
        .then(() => {          
          context.commit("updateContact", Object.assign({ id }, contactData));
        })
        .catch((err) => {
          console.error("Error updating contact.", err);
        })
        .finally(() => {
          context.commit("unsetLoading");
        });
    },
    deleteContact(context, {id}) {
      context.commit("setLoading");

      return contactsCollection.doc(id).delete()
        .then(() => {
          context.commit("deleteContact", id)
        })
        .catch((err) => {
          console.error("Error deleting contact.", err);
        })
        .finally(() => {
          context.commit("unsetLoading");
        });
    }
  },
  getters: {
    isLoading: state => state.loadingState,
    getContacts: state => state.contacts
  }
})

export default store