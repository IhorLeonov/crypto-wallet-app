import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { GlobalStyle } from "./constants/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/Theme.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
