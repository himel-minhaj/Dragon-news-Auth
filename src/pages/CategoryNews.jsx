import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  // const params = useParams();
  const { data: news } = useLoaderData();
  // console.log(params);
  // console.log(news);
  return (
    <div>
      <h1 className="font-bold">Dragon News Home</h1>
      <p>{news.length} news found in categor</p>
      <div>
        {news.map((singleNews, idx) => (
          <NewsCard key={idx} News={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
