import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
  return (
    <div className="flex gap-2 py-1 items-center justify-center bg-base-200 p-3">
      <p className="bg-[#D72050] py-1 px-2 text-base-100">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10 px-3">
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
      </Marquee>
    </div>
  );
};

export default LetestNews;
