import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
  apiKey: "AIzaSyBUHmbqddYlRfizonepHsuRWwZ8UO77BxE",
  authDomain: "tj-clothing-db.firebaseapp.com",
  projectId: "tj-clothing-db",
  storageBucket: "tj-clothing-db.appspot.com",
  messagingSenderId: "233043378019",
  appId: "1:233043378019:web:3c49aec24649d274b21d56",
  measurementId: "G-86R8JY1G64"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;