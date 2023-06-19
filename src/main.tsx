import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global-styles/style.scss";
import { AppProvider } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer position="top-center" />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
