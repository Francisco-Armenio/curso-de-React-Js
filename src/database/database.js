
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNW4ylu3vzjldXo0rNlMH2plJiYOQfmVY",
  authDomain: "curso-reactjs-20989.firebaseapp.com",
  projectId: "curso-reactjs-20989",
  storageBucket: "curso-reactjs-20989.appspot.com",
  messagingSenderId: "100455875880",
  appId: "1:100455875880:web:65a5ffcdfbd365f511fc1d"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db