import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/contact";
import Cart from "../pages/cart";
import Layout from "../routes/layout";
import Body from "../components/body";
import Search from "../pages/Search";
// import RestaurantCard from "../components/card";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      // {
      //   path: "/Rescart",
      //   element: <RestaurantCard />,
      // },
    ],
  },
]);
export default appRouter;
