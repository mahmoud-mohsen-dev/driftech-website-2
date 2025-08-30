import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ConfigProvider } from "antd";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import ContactUs from "./pages/ContactUs";
import CarsVlogs from "./pages/CarsVlogs";

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
          Input: {
            fontFamily: "Inter, sans-serif",
            colorTextPlaceholder: "#9c9c9c ",
            // colorText: "#23272C",
            // activeBorderColor: "#465FF1",
            // hoverBorderColor: "#1f74ec",
            colorBorder: "#9c9c9c",
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
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="cars-vlogs" element={<CarsVlogs />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
