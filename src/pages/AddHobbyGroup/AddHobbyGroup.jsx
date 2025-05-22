import React from "react";
import Swal from "sweetalert2";

const AddHobbyGroup = () => {
  const handleAddHobbyGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.entries());
    const newGroup = Object.fromEntries(formData.entries());
    console.log(newGroup);

    fetch("https://hobby-hub-server-alpha.vercel.app/createGroups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Added Successfully");
          Swal.fire({
            title: "Group Created Successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="p-10 md:p-24 ">
      <div className="p-5 bg-[#F7CFD8] rounded-2xl">
        <div className="p-12 text-center space-y-4">
          <h1 className="text-2xl md:text-4xl lg:text-6xl">
            <span className="text-[#FF9B45] font-bold">Create</span>{" "}
            <span className="text-[#521C0D]">New</span>{" "}
            <span className="text-[#FF9B45] font-bold">Hobby</span>
          </h1>
          <p className="text-base md:text-2xl">
            Fill Up This Form To Add New Hobby Group
          </p>
        </div>
        <form onSubmit={handleAddHobbyGroup} className="md:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Group Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Group Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category</label>
              <select name="category" className="select w-full" defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Drawing & Painting">Drawing & Painting</option>
                <option value="Photography">Photography</option>
                <option value="Video Gaming">Video Gaming</option>
                <option value="Fishing">Fishing</option>
                <option value="Running">Running</option>
                <option value="Cooking">Cooking</option>
                <option value="Reading">Reading</option>
                <option value="Writing">Writing</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                placeholder="Group Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Meeting Location</label>
              <input
                type="text"
                name="meeting"
                className="input w-full"
                placeholder="Meeting Location"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Max Members</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Max Members"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Start Date</label>
              <input
                type="date"
                name="date"
                className="input w-full"
                placeholder="Start-Date"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Name</label>
              <input
                type="text"
                name="username"
                className="input w-full"
                placeholder="User Name(Display Name)"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">User Email</label>
              <input
                type="text"
                name="useremail"
                className="input w-full"
                placeholder="User Email"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Image URL"
            />
          </fieldset>

          <input
            className="btn w-full rounded-full bg-[#FF9B45]"
            type="submit"
            value="Create Group"
          />
        </form>
      </div>
    </div>
  );
};

export default AddHobbyGroup;
