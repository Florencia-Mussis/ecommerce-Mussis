import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsSlzcLmmFuoQODf2FAVBRIGsPEf_sKzk",
  authDomain: "culture-60890.firebaseapp.com",
  projectId: "culture-60890",
  storageBucket: "culture-60890.firebasestorage.app",
  messagingSenderId: "877447474443",
  appId: "1:877447474443:web:9b1b70d614eb95903d860e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 