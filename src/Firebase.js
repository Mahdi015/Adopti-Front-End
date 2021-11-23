import firebase from "firebase/app"
import "firebase/auth"
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const  firebaseConfig = {
    apiKey: "AIzaSyBJSdPY19xyHhtgWLfyJxSxTHqMXpd24MM",
    authDomain: "adopti-1a7b7.firebaseapp.com",
    projectId: "adopti-1a7b7",
    storageBucket: "adopti-1a7b7.appspot.com",
    messagingSenderId: "334838706156",
    appId: "1:334838706156:web:398b39e9e6c79770a65ac9",
    measurementId: "G-L263VPG8X0"
  };
  // Initialize Firebasenp
  firebase.initializeApp(firebaseConfig);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  export const auth = firebase.auth();
//export const provider = new firebase.auth.GoogleAuthProvider();
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();