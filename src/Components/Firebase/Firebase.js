import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
   apiKey: process.env.API_KEY,
  authDomain: "linkedcloneapp.firebaseapp.com",
  projectId: "linkedcloneapp",
  storageBucket: "linkedcloneapp.appspot.com",
  messagingSenderId: "999135260972",
  appId: "1:999135260972:web:fa8f8f62144e65e04a3c89",
  measurementId: "G-0SVYX4VMGW"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)


const db = getFirestore(app);

export {db, auth}



