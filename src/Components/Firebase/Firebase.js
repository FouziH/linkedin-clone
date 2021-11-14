import firebase from 'firebase'



const firebaseConfig = {
   apiKey: "AIzaSyB7XjkEkTJbtRifXm-CDk7FExc-zDvGwIU",
  authDomain: "linkedcloneapp.firebaseapp.com",
  projectId: "linkedcloneapp",
  storageBucket: "linkedcloneapp.appspot.com",
  messagingSenderId: "999135260972",
  appId: "1:999135260972:web:fa8f8f62144e65e04a3c89",
  measurementId: "G-0SVYX4VMGW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}



