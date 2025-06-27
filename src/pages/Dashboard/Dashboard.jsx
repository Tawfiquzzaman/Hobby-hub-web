import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, Navigate } from "react-router";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    // Fetch all user
    fetch("https://hobby-hub-server-alpha.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));

    // Fetch all groups
    fetch("https://hobby-hub-server-alpha.vercel.app/createGroups")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllGroups(data);
      });
  }, []);

  return (
    <div className="p-6 bg-[#FEEBF6] min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Link to="/allHobbyGroup">
          <button className="bg-[#FF9B45] hover:bg-[#f2851d] text-white font-bold py-2 px-6 rounded-full transition">
            View All Groups
          </button>
        </Link>
        <Link to={"/addHobbyGroup"}>
          <button className="bg-[#521C0D] hover:bg-[#3f160a] text-white font-bold py-2 px-6 rounded-full transition">
            Add New Group
          </button>
        </Link>
        <Link to={"/myGroups"}>
          <button className="bg-[#CA7842] hover:bg-[#b86733] text-white font-bold py-2 px-6 rounded-full transition">
            My Groups
          </button>
        </Link>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#FFF2E0] shadow-md p-6 rounded text-center">
          <p className="text-gray-600">Total Users</p>
          <h3 className="text-3xl font-bold text-blue-600">
            {allUsers.length}
          </h3>
        </div>
        <div className="bg-[#FFF2E0] shadow-md p-6 rounded text-center">
          <p className="text-gray-600">Total Groups</p>
          <h3 className="text-3xl font-bold text-green-600">
            {allGroups.length}
          </h3>
        </div>
        <div className="bg-[#FFF2E0] shadow-md p-6 rounded text-center">
          <p className="text-gray-600">Logged-in User</p>
          <h3 className="text-lg font-bold text-purple-600">
            {user?.displayName || user?.email || "Anonymous"}
          </h3>
        </div>
      </div>

      {/* All Users Table */}
      <div className="bg-[#F8F8E1] shadow-md p-6 rounded mb-10 overflow-x-auto">
        <h3 className="text-xl font-bold mb-4">All Users</h3>
        <table className="table w-full">
          <thead>
            <tr className="bg-[#F3C623]">
              <th>#</th>
              <th>Name/Email</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((u, i) => (
              <tr key={u._id || i}>
                <td>{i + 1}</td>
                <td>{u.displayName || u.email}</td>
                <td>
                  <img
                    src={u.photoURL || "default-profile.png"}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* All Groups Table */}
      <div className="bg-[#F8F8E1] shadow-md p-6 rounded overflow-x-auto">
        <h3 className="text-xl font-bold mb-4">All Hobby Groups</h3>
        <table className="table w-full">
          <thead>
            <tr className="bg-[#F3C623]">
              <th>#</th>
              <th>Group Name</th>
              <th>Created By</th>
              <th>Meeting Point</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allGroups.map((group, i) => (
              <tr key={group._id || i}>
                <td>{i + 1}</td>
                <td>{group.name}</td>
                <td>{group.useremail}</td>
                <td>{group.meeting}</td>
                <td>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-800">
                    {group.status || "Ongoing"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
