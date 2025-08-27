import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./features/auth/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Global styles
          colorPrimary: "#e73201",
          borderRadius: 8,
          fontFamily: "Inter, Poppins, sans-serif",
          fontSize: 16,
          lineHeight: 1,
          // controlHeight: 40
        },
        components: {
          Button: {
            // fontSize: 24,
            fontFamily: "Inter, sans-serif",
            // fontWeight: 500,
            // colorText: "#fff",
          },
          // Input: {
          //   fontFamily: "Inter, sans-serif",
          // colorTextPlaceholder: '#969DA6',
          // colorText: "#23272C",
          // activeBorderColor: "#465FF1",
          // hoverBorderColor: "#1f74ec",
          // colorBorder: '#d9d9d9'
          // paddingBlock: 5.5,
          // paddingInline: 11
          // },
          // Form: {
          // labelColor: "#23272C",
          // labelFontSize: 13,
          // labelRequiredMarkColor: "#ff4d4f",
          // },
          // Select: {
          //   fontFamily: "Inter, sans-serif",
          //   showArrowPaddingInlineEnd: 35,
          //   controlHeight: 34,
          //   optionPadding: "2px 11px",
          // },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
