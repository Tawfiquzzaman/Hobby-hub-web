import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SingleGroup from "../SingleGroup/SingleGroup";

const AllGroup = () => {
  const allGroups = useLoaderData();
  console.log(allGroups);

  const [filteredGroups, setFilteredGroups] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); 
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    let result = [...allGroups];

    // Filter by name (you can change to category or status)
    if (filterText) {
      result = result.filter((group) =>
        group.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    // Sort by name
    result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredGroups(result);
  }, [allGroups, sortOrder, filterText]);

  return (
    <div className="p-10">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">
          <span className="text-[#FF9B45] font-bold">All</span>{" "}
          <span className="text-[#521C0D]">Hobby</span>{" "}
          <span className="text-[#FF9B45] font-bold">Groups</span>
        </h1>
        <p className="text-base md:text-2xl">Explore All Groups Here</p>
      </div>

      {/* 🔍 Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name"
          className="input input-bordered w-full md:w-1/3"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        {filteredGroups.map((group) => (
          <SingleGroup key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
