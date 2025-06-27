import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const links = (
    <>
      <div className="sm:flex md:flex gap-10">
         <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/allHobbyGroup"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      All Groups
    </NavLink>
    <NavLink
      to="/addHobbyGroup"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      Add Hobby Group
    </NavLink>
    <NavLink
      to="/myGroups"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      My Groups
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      About
    </NavLink>
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        isActive ? "underline text-[#F2E2B1] font-bold" : "text-[#F2E2B1] font-bold"
      }
    >
      Dashboard
    </NavLink>
      </div>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[#521C0D] shadow-sm">
        <div className="navbar-start md:ml-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex">
            <img className="w-10" src="hobby.png" alt="" />
            <Link to="/">
              <p className="btn btn-ghost text-xl text-white">HobbyHub</p>
            </Link>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                className="toggle theme-controller"
                onChange={(e) =>
                  document.documentElement.setAttribute(
                    "data-theme",
                    e.target.checked ? "dark" : "light"
                  )
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn bg-[#D5451B] text-white rounded-full"
              >
                Logout
              </button>
              <div className="relative ml-4 group">
                <img
                  src={user.photoURL || "default-profile.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  title="Profile Picture"
                />
                <div className="absolute right-0 mt-1 mb-2 p-1 bg-[#CA7842] text-white rounded shadow-md whitespace-nowrap z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || user.email || "No Name"}
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <p className="btn btn-warning rounded-full">Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
