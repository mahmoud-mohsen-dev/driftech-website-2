import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { ToastProvider } from "./context/ToastProvider.tsx";
import { MyAppStoreProvider } from "./context/MyAppStore.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyAppStoreProvider>
      <ToastProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToastProvider>
    </MyAppStoreProvider>
  </StrictMode>,
);
