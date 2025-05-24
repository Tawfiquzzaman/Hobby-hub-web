import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
        <Link>
          <li className="text-[#F2E2B1] font-bold" to="/">
            Home
          </li>
        </Link>
        <Link to="/allHobbyGroup">
          <li className="text-[#F2E2B1] font-bold">All Groups</li>
        </Link>
        <Link to="/addHobbyGroup">
          <li className="text-[#F2E2B1] font-bold">Add Hobby Group</li>
        </Link>
        <Link to="/myGroups">
          <li className="text-[#F2E2B1] font-bold">My Groups</li>
        </Link>
        <Link>
          <li className="text-[#F2E2B1] font-bold">About</li>
        </Link>
      </div>
    </>
  );

  return (
    <div>
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
