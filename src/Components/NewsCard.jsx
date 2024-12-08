import React from "react";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = (props = {}) => {
  // console.log(props);
  const { News } = props || {};
  const {
    title,
    author,
    published_date,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = News;
  console.log(published_date);
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-5 p-5">
      {/* Author Info */}
      <div className="flex items-center space-x-4  p-3 bg-slate-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{author.name}</p>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>

        {/* Title */}
      <div>
        <h2 className="card-title text-xl font-bold p-3">{title}</h2>
      </div>
      {/* Thumbnail */}
      <figure className="p-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        {/* Details */}
        <p className="text-sm text-gray-600">
          {details.length > 100 ? `${details.slice(0, 100)}... ` : details}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <span className="font-bold">{rating.number}</span>
            <span className="text-sm text-gray-500">{rating.badge}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEye className="text-gray-500" />
            <span className="font-bold">{total_view}</span>
          </div>
        </div>

        {/* Read More Button */}
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div> */}
      </div>
    </div>
  );
};

export default NewsCard;
