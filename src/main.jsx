import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
