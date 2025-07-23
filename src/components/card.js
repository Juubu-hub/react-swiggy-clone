import React from "react";
import { FaStar } from "react-icons/fa";
import Cart from "../pages/cart";

const RestaurantCard = ({ name, image, cuisine, rating, offer, items }) => {
  return (
    <>
      <style>
        {`
          .body {
          // border:2px solid black;
            display: inline-block;
            height: 420px;
            width: 300px;
            padding: 10px 10px 10px 20px;
            transition: transform 0.2s ;
            margin:5px
          }

          

          .body:hover {
            cursor: pointer;
            transform: scale(1.07);
            
          }

          .img {
            border-radius: 20px;
            height: 210px;
            width: 295px;

           padding:-10px 
          }

          .inner {
            display: inline-block;
            padding-left: 5px;
          }

          .title {
            display: flex;
            font-size: 18px;
          }

          .offer {
            color: gray;
          }
        `}
      </style>
      {/* <a  href=""> */}
      <div  className="body">
        <img src={image} className="img" />
        <div className="inner">
          <h1 style={{ fontFamily: "outfit" }}>{name}</h1>
          <h2
            style={{ fontFamily: "outfit", color: "#d65454ff" }}
            className="title"
          >
            {cuisine}
          </h2>
          <h1
            style={{ fontFamily: "outfit", color: "green" }}
            className="title"
          >
            <FaStar size={21} /> {rating}
          </h1>
          <h3 style={{ fontFamily: "outfit" }} className="offer">
            {offer}
          </h3>
          {/* <a><h3 className="title">{items}</h3></a> */}
        </div>
      </div>
      {/* </a> */}
    </>
  );
};

export default RestaurantCard;
