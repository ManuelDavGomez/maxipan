import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/Bootstrap.css";
import "../node_modules/bootstrap/dist/js/Bootstrap.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
