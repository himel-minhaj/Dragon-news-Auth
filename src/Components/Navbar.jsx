import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, LogOutUser,  } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        alert(" LogOut successful.");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log("Error Paichi", error.message);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-10 text-base-400">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="LogIn flex gap-3 items-center ">
        {user && user?.email ? (
          <>
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p>{user?.displayName}</p>
          </>
        ) : (
          <img src={userIcon} alt="" />
        )}
        {user? (
          <>
            <p>{user?.email}</p>
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <Link to="/auth/login" className="bg-[#403F3F] p-2 text-white">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
