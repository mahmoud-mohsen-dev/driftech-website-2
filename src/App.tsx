import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AuthLayout from "./features/auth/AuthLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
