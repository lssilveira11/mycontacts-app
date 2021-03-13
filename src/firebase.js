// based on tutorial: https://www.youtube.com/playlist?list=PLXYa8rzbO18rQQL0LNcPMLi4VB_f0wzWM

import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/storage'

// Your web app's Firebase configuration
import firebaseConfig from './firebase.config.json'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
// const auth = firebase.auth()
// const storage = firebase.storage()

const contactsCollection = db.collection('contacts')

export {
  db,
  // auth, 
  // storage,
  contactsCollection
}