import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD76pOfL5MDwIog7xocxwPw3HTuiMLBFAM",
  authDomain: "spazzio-react-c6665.firebaseapp.com",
  projectId: "spazzio-react-c6665",
  storageBucket: "spazzio-react-c6665.appspot.com",
  messagingSenderId: "1097509878565",
  appId: "1:1097509878565:web:93dfde8f785d7ab90d38cc"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
