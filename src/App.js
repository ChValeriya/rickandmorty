import React from 'react';

import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import AppRouter from './components/AppRouter';
import rootReducer from './redux/reducers';

import 'antd/dist/antd.css';

const store = legacy_createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
