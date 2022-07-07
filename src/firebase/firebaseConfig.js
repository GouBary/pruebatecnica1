
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCdHpNYa0Nd1eB_I0uAQW2C76lJy3TXWjg",
  authDomain: "prueba-tecnica-33ef7.firebaseapp.com",
  projectId: "prueba-tecnica-33ef7",
  storageBucket: "prueba-tecnica-33ef7.appspot.com",
  messagingSenderId: "528092231842",
  appId: "1:528092231842:web:b3b67184b9db1602cc3ffb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google =new GoogleAuthProvider()

export default app;

