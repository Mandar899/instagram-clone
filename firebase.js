// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvTrQ0hftos7aCA-zJupoPJRnsCBn5Gs",
  authDomain: "instagram-clone-b70ec.firebaseapp.com",
  projectId: "instagram-clone-b70ec",
  storageBucket: "instagram-clone-b70ec.appspot.com",
  messagingSenderId: "327784449584",
  appId: "1:327784449584:web:595bd14c6e815fda048ff5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize firestore db
const db = getFirestore();

// Initialize firebase storage
const storage = getStorage();

export { app, db, storage };
