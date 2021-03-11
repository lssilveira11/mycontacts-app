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
    contacts: state => state.contacts
  }
})

export default store