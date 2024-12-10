import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import AuthLayout from "../Layouts/AuthLayout";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "career",
        element: (
          <h1>
            Practical advice surrounding job search, career exploration, and
            overall professional success. Featured articles discuss relevant
            topics relating to the employment market, as well as current events
            and news in the workforce.
          </h1>
        ),
      },
      {
        path: "about",
        element: (
          <h1>
            News websites are sites devoted to delivering the news in a
            different format than television, print or radio. News sites include
            sites that have a large variety of information which may not be
            considered "news" by all audiences, but may include entertainment,
            games, news that may not be current but is interesting,
          </h1>
        ),
      },
      {
        path: "category/:id",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
        element: (
          <CategoryNews></CategoryNews>
          // <PrivateRoute>
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "news/:newsId",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register>register</Register>,
      },
    ],
  },
  {
    path: "*",
    element: <div className="text-9xl text-red-700 text-center min-h-screen">Error</div>,
  },
]);
export default router;
