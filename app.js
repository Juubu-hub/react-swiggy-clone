import React from "react";
import ReactDOM from "react-dom/client";
// import { HeaderComponent } from "./components/header";
// import Footer from "./components/foot"
// import Body from "./components/body";
import { RouterProvider } from "react-router-dom";
import appRouter from "./src/routes/routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
