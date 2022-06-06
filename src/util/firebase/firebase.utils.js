import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrvsPtzTTw6EbsjHSPGMAgSTfPVbkLeTQ",
  authDomain: "clothing-d8a76.firebaseapp.com",
  projectId: "clothing-d8a76",
  storageBucket: "clothing-d8a76.appspot.com",
  messagingSenderId: "647840402032",
  appId: "1:647840402032:web:d95349ef22be35edb782b5",
  measurementId: "G-4Z9Z2DXTC5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot.exists());
};
