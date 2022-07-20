import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD4n7V9q2f7FcDfE-rMMGglGwV-uhrklU4',
  authDomain: 'rickandmorty-5b1a1.firebaseapp.com',
  projectId: 'rickandmorty-5b1a1',
  storageBucket: 'rickandmorty-5b1a1.appspot.com',
  messagingSenderId: '1042432215783',
  appId: '1:1042432215783:web:710933441cb8d249aaf042',
  measurementId: 'G-S6CBEKY0SX'
};

const app = initializeApp(firebaseConfig);

const ContextState = {
  auth: null
};

export const Context = createContext<ContextState>({ auth: null });
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);