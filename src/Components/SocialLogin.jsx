import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Login With</h1>
      <div className=" *:w-full">
        <button className="btn mb-3">
          <span>
            <FaGoogle />
          </span>
          Login With Google
        </button>
        <button className="btn">
          <span>
            <FaGithub />
          </span>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;