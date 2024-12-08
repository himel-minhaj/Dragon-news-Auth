import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">All Caterogy ({categorys.length})</h1>
      {categorys.map((category) => (
        <NavLink
          to={`/category/${category.category_id}`}
          className="btn"
          key={category.category_id}
        >
          {category.category_name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftNavbar;
