import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { setToken } from './redux/authSlice';

const container = document.getElementById('root');
const root = createRoot(container);

// Define clientId inside or as a constant
const clientId = '281951489765-nggcld40ee0vp6m7k85gjbq3oq58jdrm.apps.googleusercontent.com';

// Check for token on app load
const token = localStorage.getItem('googleToken');
if (token) {
  store.dispatch(setToken(token));
}

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
