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
    <div className="py-10">
      <div className=" bg-[#FFFDF6] shadow-sm flex flex-col m-10 md:m-20 rounded-2xl">
        <div className="py-5 border-[#3A0519]">
          <img className=" mx-auto border-2" src={photo} alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <div className="md:flex justify-between">
            <button className="btn btn-outline btn-primary rounded-full">{category}</button>
          <button className="btn btn-outline btn-accent  rounded-full"><p>Max People Can Join: <span className="text-[#BE5B50]">{max}</span></p></button>
          </div>
          
          <div className="bg-[#A8F1FF] p-5 rounded-2xl my-5">
            <p className="text-lg font-semibold text-center">{description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <button className="btn btn-dash w-max rounded-full  btn-accent"><p>{useremail}</p></button>
          
          <button className="btn btn-dash w-max rounded-full btn-info"><p>{username}</p></button>
          <button className="btn btn-dash w-max rounded-full btn-warning"><p>{meeting}</p></button>
          
          <button className="btn btn-dash w-max rounded-full btn-error"><p>{date}</p></button>
          </div>
          <div className="card-actions mx-auto my-10">
            <button className="btn btn-primary w-100 rounded-full">Join Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
