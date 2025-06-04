import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/header";

import Body from "./components/body";

// import "./index.css";

const container = (
  <>
    <HeaderComponent /> 
    <Body/>
    
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

