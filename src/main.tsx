import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/RA_React-Router_task-3-auth'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
