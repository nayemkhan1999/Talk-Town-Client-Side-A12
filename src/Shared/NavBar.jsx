import { IoNotificationsSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../CustomHook/useAuth";
import useAxiosPublic from "../CustomHook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const { displayName, photoURL } = user || {};

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => {});
  };
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 bg-gray-300 shadow-md font-bold tracking-wide mr-3"
              : "text-[#363f4d] font-bold bg-gray-300 shadow-md tracking-wide mr-3"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500  bg-gray-300 shadow-md font-bold tracking-wide mr-3"
              : "text-[#363f4d] font-bold bg-gray-300 shadow-md mr-3"
          }
          to="/membership"
        >
          Membership
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500  bg-gray-300 shadow-md font-bold tracking-wide"
              : "text-[#363f4d] font-bold bg-gray-300 shadow-md"
          }
          to="/contact"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  // show notification
  const axiosPublic = useAxiosPublic();

  const { refetch, data: notify = [] } = useQuery({
    queryKey: ["notificaton"],
    queryFn: async () => {
      const result = await axiosPublic.get("/announce", {
        withCredentials: true,
      });
      return result.data;
    },
  });
  refetch();
  // console.log(notify, "69");
  return (
    <div className="averia-serif lg:mx-10 ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          {/* DropDown Menu */}
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
              >
                {link}
              </ul>
            </div>
          </div>
          <img
            className="lg:w-[40px] w-[20px]"
            src="https://cdn-icons-png.flaticon.com/128/5529/5529941.png"
            alt=""
          />
          <h1 className="lg:text-3xl font-bold ">
            <span className="text-orange-500 lg:text-4xl font-black">T</span>alk
            <span className="text-orange-500 lg:text-4xl font-black">T</span>own
          </h1>
        </div>

        <div className="navbar-center hidden lg:flex lg:mr-[300px] mt-2">
          <ul className="menu menu-horizontal px-1 ">{link}</ul>
        </div>
        <div className="flex-none">
          {/* Show Notification */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3"
            >
              <div className="indicator ">
                <IoNotificationsSharp className="z-10" size={22} />
                <span className="badge badge-sm indicator-item">
                  {notify?.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {notify?.length} Items
                </span>

                <div className="card-actions">
                  <Link to="/announcement">
                    <button className="btn btn-primary btn-sm  btn-block">
                      Announcement
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://cdn-icons-png.flaticon.com/128/15735/15735369.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <Link to="/dashboard">
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-orange-500 text-white">Join US</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
