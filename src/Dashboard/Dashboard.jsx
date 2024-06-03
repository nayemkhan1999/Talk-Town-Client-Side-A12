import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";

const Dashboard = () => {
  return (
    <div className="averia-serif lg:mx-10 ">
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen   bg-orange-400">
          <ul className="menu p-4">
            <>
              <li>
                <NavLink to="/myProfile">
                  <CgProfile size={20} />
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/addPost">
                  <MdPostAdd size={20} />
                  Add Post
                </NavLink>
              </li>
              <li>
                <NavLink to="/myPost">
                  <BiAddToQueue size={20} />
                  My Posts
                </NavLink>
              </li>
            </>

            {/* Sheared nav link all user public */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome size={18} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch size={15} />
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
