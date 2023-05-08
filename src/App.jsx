import React from 'react';
import './App.css';
import { router } from './Pages/index.js'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './Store/store.js';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;