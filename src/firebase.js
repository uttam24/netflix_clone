import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAMxUw1rHuJOtXXdx_ttdceM45e_dkbIXw",
  authDomain: "netflix-clone-bc88c.firebaseapp.com",
  projectId: "netflix-clone-bc88c",
  storageBucket: "netflix-clone-bc88c.appspot.com",
  messagingSenderId: "103044660991",
  appId: "1:103044660991:web:1b2f5c87951b2375c3d6ca"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth =  getAuth();

export {auth} 