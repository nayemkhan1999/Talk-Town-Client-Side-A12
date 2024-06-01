import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="averia-serif lg:mx-10">
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-314px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
