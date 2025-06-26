import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#521C0D] text-neutral-content p-10">
        <aside className="flex gap-10">
          <img className="w-20" src="hobby.png" alt="" />
          <Link to="/">
            <p className="btn btn-ghost text-xl text-white">HobbyHub</p>
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <ul>
            <li className="text-[#F2E2B1] font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#F2E2B1] font-bold">
              <Link to="/allHobbyGroup">All Groups</Link>
            </li>
            <li className="text-[#F2E2B1] font-bold">
              <Link to="/addHobbyGroup">Add Hobby Group</Link>
            </li>
            <li className="text-[#F2E2B1] font-bold">
              <Link to="/myGroups">My Groups</Link>
            </li>
            <li className="text-[#F2E2B1] font-bold">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <div className="flex flex-col">
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.linkedin.com/in/mdtawfiquzzaman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#F2E2B1]"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 
      5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
      19h-3v-10h3v10zm-1.5-11.268c-.966 
      0-1.75-.784-1.75-1.75s.784-1.75 
      1.75-1.75 1.75.784 
      1.75 1.75-.784 1.75-1.75 
      1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 
      0v5.604h-3v-10h3v1.604c1.396-2.586 7-2.777 
      7 2.476v5.92z"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#F2E2B1]"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/md.tawfiquzzaman.2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#F2E2B1]"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
