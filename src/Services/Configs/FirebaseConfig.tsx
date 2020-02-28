import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVG2qgxJDaGSuxNPynp4K1OTyg0mBHSzE",
  authDomain: "fir-80bca.firebaseapp.com",
  databaseURL: "https://fir-80bca.firebaseio.com",
  projectId: "fir-80bca",
  storageBucket: "fir-80bca.appspot.com",
  messagingSenderId: "321549885469",
  appId: "1:321549885469:web:83c05a0b1215475b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseStorage = firebase.storage();
export { firebase, firebaseStorage };
