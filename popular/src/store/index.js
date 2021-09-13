import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactList: [],
  },
  mutations: {
    addContact(state, { id, contact }) {
      contact.id = id
      state.contactList.push(contact)
    }
  },
  actions: {
    addContact({ commit, state }, contact) {
      const listCount = Object.keys(state.contactList).length + 1
      firebase.firestore().collection("contact").doc(`${listCount}`).set(contact).then(() => {
        commit('addContact', { id: listCount, contact })
      })
    },
    fetchContactList({ commit }) {
      firebase.firestore().collection("contact").get().then(snapshot => {
        snapshot.forEach(doc => commit('addContact', {id: doc.id, contact: doc.data() }))
      })
    },
    toggleSideMenu({ commit,state }) {
      var list = state.contactList
      console.log(Object.keys(list).length)
      commit
    },
  },
  getters: {

  }
})
