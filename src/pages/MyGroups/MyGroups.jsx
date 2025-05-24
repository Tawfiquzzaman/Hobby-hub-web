import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);

   useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/createGroups?useremail=${user.useremail}`)
        .then(res => res.json())
        .then(data => setMyGroups(data))
        .catch(err => console.error('Error fetching user groups:', err));
    }
  }, [user]);

  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
          <span className="text-[#FF9B45] font-bold">My</span>{" "}
          <span className="text-[#521C0D]">Created</span>{" "}
          <span className="text-[#FF9B45] font-bold">Groups</span>
        </h1>

      {myGroups.length === 0 ? (
        <p className="text-center text-gray-600">You haven't created any groups yet.</p>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {myGroups.map((group) => (
            <div
              key={group._id}
              className="card lg:card-side bg-[#F79B72] border-2 border-[#3A0519] shadow-md"
            >
              <figure>
                <img src={group.photo} alt={group.name} className="h-full object-cover" />
              </figure>
              <div className="card-body text-[#3A0519]">
                <h2 className="text-xl md:text-2xl font-bold">{group.name}</h2>
                <p className="text-lg">{group.category}</p>
                <div className="card-actions justify-end">
                  <Link to={`/groups/${group._id}`}>
                    <button className="btn bg-[#3A0519] text-white rounded-full">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default MyGroups;
