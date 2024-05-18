import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJsIi27cN8wtteqnS5JT3HwEit7iCwAQM",
  authDomain: "fitcon-paf.firebaseapp.com",
  projectId: "fitcon-paf",
  storageBucket: "fitcon-paf.appspot.com",
  messagingSenderId: "461461682731",
  appId: "1:461461682731:web:498be7f94ea7ffb3cc486e",
};

// Initialize Firebases
firebase.initializeApp(firebaseConfig);

export default firebase;
