import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email, password, ...restFormData} = Object.fromEntries(formData.entries());

    // const { email, password, ...rest } = Object.fromEntries(
    //   formData.entries()
    // );
    // const userProfile = {
    //     email,
    //     ...rest,
    // }
    // console.log(email, password, userProfile);

    // const name = formData.get('name');
    // const photo = formData.get('photo');

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
            email,
            ...restFormData,
            creationTime: result.user?.metadata.creationTime,
            lastSignInTime: result.user?.metadata.lastSignInTime,

        }


        //save profile info in the database
        fetch("https://hobby-hub-server-alpha.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Profile Account has been Created Successfully!!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-30">
      <div className="hero bg-[#FAE3C6] min-h-screen rounded-3xl">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-6xl shadow-2xl">
              <span className="text-[#FF9B45] font-bold">Register</span>{" "}
              <span className="text-[#521C0D]">Yourself</span>{" "}
              <span className="text-[#FF9B45] font-bold">To</span>
              <span className="text-[#521C0D]">Join</span>{" "}
              <span className="text-[#FF9B45] font-bold">Hobbies</span>
            </h1>
          </div>
          <div className="card bg-[#FFC6C6] w-full max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
              <form onSubmit={handleRegistration} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Full Name"
                  name="name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  name="photo"
                />
                <div>
                  <p>
                    Already Have Account?{" "}
                    <Link className="text-red-700" to="/login">
                      Log In
                    </Link>
                  </p>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
