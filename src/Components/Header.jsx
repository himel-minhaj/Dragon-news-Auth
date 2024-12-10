import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-3">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 ">Journalism Without Fear or Favour</h1>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
