import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: 'AIzaSyCKf9sb73yFYMB7ZUyYxXxCq50AbOrAn6o',
  authDomain: 'perfil-del-vino.firebaseapp.com',
  projectId: 'perfil-del-vino',
  storageBucket: 'perfil-del-vino.appspot.com',
  messagingSenderId: '1044225280135',
  appId: '1:1044225280135:web:7a838c231837e3cd3e1022',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
reportWebVitals();
