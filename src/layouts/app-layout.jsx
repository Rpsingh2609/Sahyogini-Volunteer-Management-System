import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <div className=" min-h-screen">
      <div className="grid-background"></div>
      {/* <Navbar className="bg-white"  /> */}
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <Footer className="bg-gray-700"  />
    </div>
  );
};

export default AppLayout;
