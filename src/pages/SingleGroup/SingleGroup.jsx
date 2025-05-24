import React from "react";
import { Link } from "react-router";

const SingleGroup = ({ group }) => {
  const { _id, photo, name, category } = group;

  return (
    <div className="card lg:card-side bg-[#F79B72] border-2 border-[#3A0519] shadow-md">
      <figure>
        <img
          src={photo}
          alt={name}
          className="h-full object-cover w-48 lg:w-60"
        />
      </figure>
      <div className="card-body text-[#3A0519]">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-lg">{category}</p>
        <div className="card-actions justify-end">
          <Link to={`/groups/${_id}`}>
            <button className="btn bg-[#3A0519] text-white rounded-full">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
