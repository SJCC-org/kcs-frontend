import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { getCookie, removeCookie } from "./lib/cookie";
import { userFailure, userSuccess } from "./modules/user";
import axios from "axios";
import jwt from "jwt-decode";
import { GlobalStyle } from "./styles/globalStyle";

const store = createStore(rootReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));

async function loadUser() {
  const accessToken = getCookie("myAToken");
  const refreshToken = getCookie("myRToken");
  if (!refreshToken) {
    return;
  }

  const { exp } = jwt(refreshToken);

  if (Date.now() >= exp * 1000) {
    removeCookie("myAToken");
    removeCookie("myRToken");
  } else if (Date.now() < jwt(accessToken).exp * 1000) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    try {
      const response = await axios.get(
        "https://api.kcs.zooneon.dev/v1/members"
      );
      store.dispatch(userSuccess(response.data.data));
    } catch (e) {
      store.dispatch(userFailure(e));
    }
  }
}
loadUser();

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
);
