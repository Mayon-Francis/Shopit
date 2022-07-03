import React from "react";
import ReactDOM from "react-dom/client";
import "styles/Index.css";
import App from "App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    accentSecondary: {
      main: '#5E35B1',
      contrastText: "#fff"
    },
    highlight1: {
      main: 'rgb(253, 239, 34)',
    },
    highlight2: {
      main: 'rgb(252, 179, 44)',
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
