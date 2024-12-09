import React from "react";
import Header from "../Components/Header";
import RightNav from "../LayoutComponents/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  // console.log("news", news);
  // const { image_url, title, details } = news;
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-bold">Dragon News</h1>
          <div className="card bg-base-100  shadow-2xl">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn ">
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
