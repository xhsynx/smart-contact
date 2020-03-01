import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzMuSxYM17Ek5D4KstxHjxvPVA8dET-QE",
  authDomain: "contacts-react-native-5025e.firebaseapp.com",
  databaseURL: "https://contacts-react-native-5025e.firebaseio.com",
  projectId: "contacts-react-native-5025e",
  storageBucket: "contacts-react-native-5025e.appspot.com",
  messagingSenderId: "174985784238",
  appId: "1:174985784238:web:289b498359569e9a3b763f",
  measurementId: "G-DS98EZV0VV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseStorage = firebase.storage();
export { firebase, firebaseStorage };
