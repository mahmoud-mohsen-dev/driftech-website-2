import { Outlet } from "react-router";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
