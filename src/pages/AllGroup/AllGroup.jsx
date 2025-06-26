import React from "react";
import { useLoaderData } from "react-router";
import SingleGroup from "../SingleGroup/SingleGroup";

const AllGroup = () => {
  const allGroups = useLoaderData();
  console.log(allGroups);

  return (
    <div className="p-10">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl">
          <span className="text-[#FF9B45] font-bold">All</span>{" "}
          <span className="text-[#521C0D]">Hobby</span>{" "}
          <span className="text-[#FF9B45] font-bold">Groups</span>
        </h1>
        <p className="text-base md:text-2xl">
          Explore All Groups Here
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        {allGroups.map((group) => (
          <SingleGroup key={group._id} group={group}></SingleGroup>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
