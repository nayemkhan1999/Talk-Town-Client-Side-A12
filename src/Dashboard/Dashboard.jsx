import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaSearch } from "react-icons/fa";
import {
  MdAdminPanelSettings,
  MdLocalActivity,
  MdManageAccounts,
  MdPostAdd,
} from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import useAuth from "../CustomHook/useAuth";
import { useState } from "react";

import { GrAnnounce } from "react-icons/gr";
// import useCart from "../hooks/useCart";

const Dashboard = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [role, setRole] = useState();

  axiosPublic.get(`/Role/${user?.email}`).then((res) => {
    console.log(res.data, "14 number line");
    setRole(res.data.role);
  });
  console.log(role);
  return (
    <div className="averia-serif lg:mx-10 ">
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen  bg-gray-300 shadow-xl">
          {/* ==========================Admin Role Play=============================== */}

          {role === "Admin" && (
            <ul className="menu p-4">
              <>
                <li>
                  <NavLink to="/adminProfile">
                    <MdAdminPanelSettings size={22} />
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manageUser">
                    <MdManageAccounts size={22} />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/activities">
                    <MdLocalActivity size={20} />
                    Activities
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/announcement">
                    <GrAnnounce size={20} />
                    Announcement
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
                <NavLink to="/search">
                  <FaSearch size={15} />
                  Menu
                </NavLink>
              </li>
            </ul>
          )}
          {/* =======================User Role Play======================== */}
          {role === "User" && (
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
          )}
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
