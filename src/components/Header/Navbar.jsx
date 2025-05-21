import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <div className="flex gap-10">
        <Link>
        <li className="text-[#F2E2B1] font-bold" to="/">Home</li>
      </Link>
      <Link>
        <li className="text-[#F2E2B1] font-bold">All Groups</li>
      </Link>
      <Link to="/addHobbyGroup">
        <li className="text-[#F2E2B1] font-bold">Add Hobby Group</li>
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
        <div className="navbar-start md:mx-20">
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
            <Link to='/'><a className="btn btn-ghost text-xl text-white">HobbyHub</a></Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to=''><a className="btn btn-warning rounded-full md:mx-20">Login</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
