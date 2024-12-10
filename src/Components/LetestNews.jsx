import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const LetestNews = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);
  console.log(users.length);
  return (
    <div className="flex gap-2 py-1 items-center justify-center bg-base-200 p-3">
      <div>
        <p className="bg-[#D72050] py-1 px-2 text-base-100">Latest</p>
      </div>
      <Marquee
        pauseOnHover={true}
        // speed={100}
        className="space-x-20 px-3"
      >
        {users.map((user, idx) => (
          <Link className="ml-10" key={idx} to={`/news/${user._id}`}>
            {user.title}
          </Link>
        ))}
      </Marquee>

      {/* <Marquee pauseOnHover={true} speed={100} className="space-x-10 px-3">
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...@@
        </Link>
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/news">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee> */}
    </div>
  );
};

export default LetestNews;
