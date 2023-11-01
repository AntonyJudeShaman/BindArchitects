import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const firebaseConfig = {
  apiKey: "AIzaSyC7T7WZ-vTEqEOXmn-oQ3Up9XWBd6VLlcw",
  authDomain: "studio-bind.firebaseapp.com",
  projectId: "studio-bind",
  storageBucket: "studio-bind.appspot.com",
  messagingSenderId: "806244613058",
  appId: "1:806244613058:web:8ee60d84689e58f787f45b",
  measurementId: "G-2CWE8HC1ZF"
};

export const app = initializeApp(firebaseConfig);