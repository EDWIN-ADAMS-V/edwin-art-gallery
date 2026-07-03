import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCOKwTb9ENn-osKkEcOdqlC_H9y22-KqL0",

  authDomain: "edwin-art-gallery.firebaseapp.com",

  projectId: "edwin-art-gallery",

  storageBucket: "edwin-art-gallery.firebasestorage.app",

  messagingSenderId: "479199274032",

  appId: "1:479199274032:web:079a0be6ca2ae9d00ff9f5"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);

export default app;