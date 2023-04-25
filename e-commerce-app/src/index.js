import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app'
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCJQZVq0F14s2r5cT6lmH7nfbdcWRsgT9I",
  authDomain: "reactjs-pf-pereira.firebaseapp.com",
  projectId: "reactjs-pf-pereira",
  storageBucket: "reactjs-pf-pereira.appspot.com",
  messagingSenderId: "293742705860",
  appId: "1:293742705860:web:099b9e647814baba90dd91",
  measurementId: "G-EBVBV6GBVS"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
