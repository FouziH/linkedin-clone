import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAWDanrPIZz-yfiyTn1fSo-VgmSqM8CyMQ",
  authDomain: "linkedin-clone-prjc.firebaseapp.com",
  projectId: "linkedin-clone-prjc",
  storageBucket: "linkedin-clone-prjc.appspot.com",
  messagingSenderId: "917998464269",
  appId: "1:917998464269:web:ac2cc535b1be4fe5b3d444",
  measurementId: "G-NQ1K4SFHQY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export {db, auth};
