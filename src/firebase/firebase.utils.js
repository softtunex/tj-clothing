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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

 if(!snapShot.exists){
   const {displayName, email} = userAuth;
   const createdAt = new Date();

   try{
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
   }catch(error){
      console.log('error creating user', error.message);
   }
 }
 return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;