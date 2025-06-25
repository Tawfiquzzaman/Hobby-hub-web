import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, SetSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SetSuccess(false);
    setErrorMsg('');

    //firebase send for sign in
    signInUser(email, password)
      .then((result) => {
        SetSuccess(true);
        console.log(result.user);
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        navigate(from, { replace: true });
        return fetch("https://hobby-hub-server-alpha.vercel.app/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInInfo),
        });
        
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update patch", data);
        navigate(from, { replace: true });
      })
      .catch((error) =>  {
        console.error("Login Error:", error);
        setErrorMsg(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message || "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="p-30">
      <div className="hero bg-[#FAE3C6] min-h-screen rounded-3xl">
        <div className="hero-content flex flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-6xl shadow-2xl">
              <span className="text-[#FF9B45] font-bold">LogIn</span>{" "}
              <span className="text-[#521C0D]">To</span>{" "}
              <span className="text-[#FF9B45] font-bold">Explore</span>
              <span className="text-[#521C0D]">Hobbies</span>{" "}
            </h1>
          </div>
          <div className="card bg-[#FFC6C6] w-full max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  <p>
                    Are You A New User?{" "}
                    <Link className="text-red-700" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <div className="border-b-1 border-dashed opacity-25 my-5">
                  <h1 className="text-center">Others Login</h1>
                </div>
                {/* Google */}
                <button className="btn bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </form>
              {
                errorMsg && <p className="text-red-500">Please Check Log In Credentials</p>
              }
              {
                success && <p className="text-purple-500">Log in Successful</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
