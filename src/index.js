import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { getCookie } from './lib/cookie';
import { userFailure, userSuccess } from './modules/user';
import axios from 'axios';

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadUser() {
  const accessToken = getCookie('myAToken');
  if (!accessToken) {
    return;
  }
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  try {
    const response = await axios.get('https://api.kcs.zooneon.dev/v1/members');
    store.dispatch(userSuccess(response.data.data));
  } catch (e) {
    store.dispatch(userFailure(e));
  }
}
loadUser();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
