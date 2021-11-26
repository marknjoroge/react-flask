import 'firebase/auth'; 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoOb4kuOrH2m0eQFsXD_jbceBkyaTKk1A",
  authDomain: "loginpage-4e38f.firebaseapp.com",
  projectId: "loginpage-4e38f",
  storageBucket: "loginpage-4e38f.appspot.com",
  messagingSenderId: "305003106825",
  appId: "1:305003106825:web:afd0a768b6d53436631ed8"
};

const firebase = initializeApp(firebaseConfig);
export { firebase }; 
