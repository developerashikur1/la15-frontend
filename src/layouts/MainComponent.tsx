import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navber";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      {/* <div className="pt-16"> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
