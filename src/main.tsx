import React from "react";
import ReactDOM from "react-dom/client";
// Components
import { App } from "./App";
// Style
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
