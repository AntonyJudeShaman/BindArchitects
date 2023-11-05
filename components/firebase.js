import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyD_Z86v8Dw6McM3hOTm7fZ7d7kKB8-koqo",
  authDomain: "bind-f87fe.firebaseapp.com",
  projectId: "bind-f87fe",
  storageBucket: "bind-f87fe.appspot.com",
  messagingSenderId: "95279806538",
  appId: "1:95279806538:web:c3fd5e3fc50febd0ea4eb3",
  measurementId: "G-9HXTR7WXH3",
};

export const app = initializeApp(firebaseConfig);
