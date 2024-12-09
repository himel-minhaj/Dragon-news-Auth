import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(name,email,password);
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "character must be more then 5" });
      return;
    }
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log({ name, email, password, photo });
    createNewUser(email, password)
      .then((Result) => {
        setUser(Result.user);
        // navigate("/auth/login");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
        
      })
      .catch((error) => {
        console.log("Error Paichi", error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
        <h1 className="text-2xl font-semibold text-center">
          Register your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          {error.name && (
            <label className="label text-sm text-red-600">
              {error.name}
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered bg-slate-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered bg-slate-100"
              required
            />
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="label-text">Accept Term & Conditions</span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
          <p className="text-center">
            Already Have An Account ?
            <Link to={"/auth/login"} className="text-red-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
