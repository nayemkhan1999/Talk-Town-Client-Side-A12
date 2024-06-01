import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-[#363f4d] "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-[#363f4d] "
          }
          to="/"
        >
          Membership
        </NavLink>
      </li>
    </>
  );

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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
          <h1 className="lg:text-3xl font-bold">
            <span className="text-orange-500 lg:text-4xl font-black">T</span>alk
            <span className="text-orange-500 lg:text-4xl font-black">T</span>own
          </h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3"
            >
              <div className="indicator ">
                <IoNotificationsSharp className="z-10" size={22} />
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">User name</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
