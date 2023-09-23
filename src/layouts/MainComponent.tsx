import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navber";

export default function MainLayout() {
    
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
