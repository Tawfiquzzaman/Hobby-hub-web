import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; 
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth"; 

const Register = () => {
  const [success, SetSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    );

    SetSuccess(false);
    setErrorMsg("");

    // Password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUpperCase || !hasLowerCase || !isLengthValid) {
      let message = "Password must:\n";
      if (!hasUpperCase) message += "- include at least one uppercase letter\n";
      if (!hasLowerCase) message += "- include at least one lowercase letter\n";
      if (!isLengthValid) message += "- be at least 6 characters long";

      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: message,
      });
      return;
    }

    // Create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        return updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          SetSuccess(true);

          // Save user to DB
          const userProfile = {
            email,
            name,
            photo,
            creationTime: createdUser?.metadata?.creationTime,
            lastSignInTime: createdUser?.metadata?.lastSignInTime,
          };

          return fetch("https://hobby-hub-server-alpha.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          });
        });
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
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error.message);
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
              <form onSubmit={handleRegistration}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-info"
                  placeholder="Full Name"
                  name="name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-info"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-info"
                  placeholder="Password"
                  name="password"
                  required
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input input-info"
                  placeholder="Photo URL"
                  name="photo"
                  required
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
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}
              {success && (
                <p className="text-purple-500">User Created Successfully</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
