import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { AsideProvider } from "./contexts/AsideContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AsideProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AsideProvider>
    </AuthProvider>
  </React.StrictMode>
);
