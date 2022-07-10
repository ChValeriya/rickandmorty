import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";


import App from './App';
import rootReducer from './redux/reducers';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = legacy_createStore(rootReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);