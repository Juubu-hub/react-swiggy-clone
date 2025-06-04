import React from "react";
import { FaStar } from "react-icons/fa6";

const RestaurantCard = ({ name, image, cuisine, rating, offer, items }) => {
  return (
    <>
      <style>
        {`
          .body {
            display: inline-block;
            height: 420px;
            width: 300px;
            padding: 10px 10px 10px 20px;
            transition: transform 0.2s ;
          }

          

          .body:hover {
            cursor: pointer;
            transform: scale(1.07);
          }

          .img {
            border-radius: 20px;
            height: 210px;
            width: 295px;
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

      <div className="body">
        <img src={image} alt={name} className="img" />
        <div className="inner">
          <h1>{name}</h1>
          <h2 className="title">{cuisine}</h2>
          <h1 className="title">
            <FaStar /> {rating}
          </h1>
          <h3 className="offer">{offer}</h3>
          {/* <a><h3 className="title">{items}</h3></a> */}
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
