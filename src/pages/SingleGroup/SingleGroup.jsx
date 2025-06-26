import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SingleGroup = ({ group }) => {
  const { _id, photo, name, category } = group;

  const handleDelete = () => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/createGroups/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('After Delete', data)
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-[#F79B72] border-2 border-[#3A0519] shadow-md">
      <figure className="w-48 lg:w-60 h-40 lg:h-48 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="h-full object-cover w-48 lg:w-60"
        />
      </figure>
      <div className="card-body text-[#3A0519]">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-lg">{category}</p>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-active btn-error w-max"
        >
          Delete
        </button>
        <Link to={`/updateGroup/${_id}`}><button className="btn btn-active btn-info">Update</button></Link>
        <div className="card-actions justify-end">
          <Link to={`/groups/${_id}`}>
            <button className="btn bg-[#3A0519] text-white rounded-full w-30 mr-10 md:mr-10">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
