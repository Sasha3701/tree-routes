import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store";
import { saveState } from "./store/storage";
import { debounce } from "debounce";
import "./styles/index.scss";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
