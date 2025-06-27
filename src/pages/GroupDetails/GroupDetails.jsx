import React from "react";
import { useLoaderData } from "react-router";

const GroupDetails = () => {
  const oneGroup = useLoaderData();
  console.log(oneGroup);
  const {
    photo,
    name,
    category,
    description,
    max,
    meeting,
    date,
    useremail,
    username,
  } = oneGroup;

  return (
    <div className="py-10 px-4 md:px-20 min-h-screen">
      <div className="max-w-6xl mx-auto bg-[#FFC6C6] shadow-2xl rounded-3xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={photo}
            alt={name}
            className="w-full h-auto max-h-[600px] bg-[#FFC6C6] object-contain mx-auto p-4"
          />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-10 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-[#521C0D]">
            {name}
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="badge badge-outline badge-primary px-5 py-3 text-lg">
              {category}
            </span>
            <span className="badge badge-outline badge-accent px-5 py-3 text-lg">
              Max Join: <span className="text-[#BE5B50]">{max}</span>
            </span>
          </div>

          <div className="bg-[#A8F1FF] p-6 rounded-2xl shadow-md">
            <p className="text-lg md:text-xl text-center font-medium">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
            <div className="bg-[#F2F2F2] rounded-xl p-4 shadow">
              <p className="text-gray-600 font-semibold">Organizer</p>
              <p className="text-[#521C0D] font-bold text-lg">{username}</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-xl p-4 shadow">
              <p className="text-gray-600 font-semibold">Email</p>
              <p className="text-[#521C0D] font-bold text-lg">{useremail}</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-xl p-4 shadow">
              <p className="text-gray-600 font-semibold">Meeting Location</p>
              <p className="text-[#521C0D] font-bold text-lg">{meeting}</p>
            </div>
            <div className="bg-[#F2F2F2] rounded-xl p-4 shadow">
              <p className="text-gray-600 font-semibold">Scheduled Date</p>
              <p className="text-[#521C0D] font-bold text-lg">{date}</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-[#FF9B45] hover:bg-[#e88530] text-white font-bold px-10 py-3 rounded-full shadow-lg transition duration-300">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
