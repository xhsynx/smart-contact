import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1ON6k60IQ4QmersIHBRR2U5LRyJHx5_4",
  authDomain: "contacts-react-native-7e5c9.firebaseapp.com",
  databaseURL: "https://contacts-react-native-7e5c9.firebaseio.com",
  projectId: "contacts-react-native-7e5c9",
  storageBucket: "contacts-react-native-7e5c9.appspot.com",
  messagingSenderId: "227875272698",
  appId: "1:227875272698:web:4ab17525f4ced32ff6d643"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseStorage = firebase.storage();
export { firebase, firebaseStorage };
