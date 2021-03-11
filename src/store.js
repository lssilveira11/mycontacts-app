import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

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
    setContacts(state, contacts){
      state.contacts = contacts
    },
    createContact(state, contact){
      state.contacts.push(contact)
    },
    updateContact(state, contact){
      const idx = state.contacts.findIndex((c) => c.id == contact.id);
      state.contacts[idx].name = contact.name;
      state.contacts[idx].email = contact.email;
      state.contacts[idx].phone = contact.phone;
    },
    deleteContact(state, id){
      state.contacts = state.contacts.filter((c) => c.id !== id);
    }
  },
  actions: {
    getContacts(context){
      context.commit('setLoading');

      return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          context.commit('setContacts', res.data);
        })
        .catch((err) => {
          console.log("🚀 ~ file: App.vue ~ line 56 ~ data ~ err", err);
        })
        .finally(()=> {
          context.commit('unsetLoading');
        });
    }
  },
  getters: {
    isLoading: state => state.loadingState,
    getContacts: state => state.contacts
  }
})

export default store