import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0n2o2ebDJGiapPAq6w9Z6tKJmy1lZvP8",
  authDomain: "clone-69709.firebaseapp.com",
  projectId: "clone-69709",
  storageBucket: "clone-69709.appspot.com",
  messagingSenderId: "265247322497",
  appId: "1:265247322497:web:eb4a6f4106eda8be4bf880",
  measurementId: "G-DJKBXPXPH9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
