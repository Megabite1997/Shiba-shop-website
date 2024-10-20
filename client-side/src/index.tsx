import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { CartContextProvider } from "./store/cart-context";
import { AuthProviderProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AuthProviderProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthProviderProvider>
  </React.StrictMode>,
);
