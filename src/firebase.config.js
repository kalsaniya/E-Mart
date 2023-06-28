import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyEbQi4LtcSih6oBKPq-0RDG6GNnaOjfo",
  authDomain: "multimart-88c6f.firebaseapp.com",
  projectId: "multimart-88c6f",
  storageBucket: "multimart-88c6f.appspot.com",
  messagingSenderId: "548185674979",
  appId: "1:548185674979:web:50f4e2c5352d0a617a21d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
