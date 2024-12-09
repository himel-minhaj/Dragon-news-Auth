import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState({});
  console.log(location);
  const { LogInUser, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    LogInUser(email, password)
      .then((Result) => {
        setUser(Result.user);
        navigate(location?.state ? location.state : "/"); //location.pathname=state
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
        <h1 className="text-2xl font-semibold text-center">
          Login your account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
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
            {error.login && (
              <label className="label text-sm text-red-600">
                
                  {error.login}
                
              </label>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Login</button>
          </div>
          <p className="text-center">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
