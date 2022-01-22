import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { MealContextProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
