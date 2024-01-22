import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Photo from "./components/Photo";
import Info from "./components/Info";
import Content from "./components/Content";
import Kaki from "./components/Kaki";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Photo />
      <Info />
      <Content />
      <Kaki />
   </React.StrictMode>
);
