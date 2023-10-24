import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmAu6YmdBFliQdFxuMuzHzpUVMbSohuDY",
  authDomain: "todo-app-b709d.firebaseapp.com",
  projectId: "todo-app-b709d",
  storageBucket: "todo-app-b709d.appspot.com",
  messagingSenderId: "1085044279657",
  appId: "1:1085044279657:web:66857525970394889715f8",
  measurementId: "G-BFK0J4TQZC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

