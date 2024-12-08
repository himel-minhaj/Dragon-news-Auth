
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-4">
      <h1 className="font-semibold mb-3">Find us on</h1>
      <div className="join flex join-vertical *:bg-white ">
        <button className="btn justify-start  join-item">
          <span>
            <FaFacebook></FaFacebook>
          </span>
          Facebook
        </button>
        <button className="btn justify-start  join-item">
          {" "}
          <span className="text-blue-600">
            <FaTwitter></FaTwitter>
          </span>
          Twitter
        </button>
        <button className="btn justify-start join-item">
          <span>
            <FaInstagram />
          </span>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;