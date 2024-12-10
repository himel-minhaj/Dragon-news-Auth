import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { signInGoogle, setUser, signInGithub } = useContext(AuthContext);
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((Result) => {
        setUser(Result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignInGithub = () => {
    signInGithub()
      .then((Result) => {
        setUser(Result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="font-semibold mb-3">Login With</h1>
      <div className=" *:w-full">
        <button onClick={handleSignInGoogle} className="btn mb-3">
          <span>
            <FaGoogle />
          </span>
          Login With Google
        </button>
        <button onClick={handleSignInGithub} className="btn">
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
