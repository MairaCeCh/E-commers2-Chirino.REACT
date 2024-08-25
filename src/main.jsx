import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzkeCYSpT3skm5xh4wuB83fTVc-K5nEmY",
  authDomain: "zapatos-b0ca6.firebaseapp.com",
  projectId: "zapatos-b0ca6",
  storageBucket: "zapatos-b0ca6.appspot.com",
  messagingSenderId: "783460290466",
  appId: "1:783460290466:web:1e4fc9184ca41e54db6cfb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
