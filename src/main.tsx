import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
// import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import AuthLayout from "./features/auth/AuthLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
