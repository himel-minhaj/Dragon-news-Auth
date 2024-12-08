import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-10 text-base-400">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="LogIn flex gap-3 items-center ">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="bg-[#403F3F] p-2 text-white">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
