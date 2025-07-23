import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/card";
import ShimmerLoader from "../components/shimer";

import Slider from "../../Slider/Slider";
const slider = {
  marginRight: "130px",
  marginBottom: "90px",
};

const h1 = {
  fontFamily: "poppins",
  fontSize: "30px",
  fontWeight: "700",
};
const divimg = {
  height: "auto",
  width: "auto",
  //  height: "300px",
  //     width: "650px",
};

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const [filteredRes, setFilteredRes] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/getAllData");
    const data = await response.json();
    setRestaurants(data);
    // setFilteredRes(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const Search = (e) => {
  //   const text = e.target.value;
  //   const filtered = restaurants.filter((r) =>
  //     r.name.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setFilteredRes(filtered);
  // };

  return (
    <>
      {/* <input
        type="text"
        placeholder="Search for restaurants and food"
        onChange={Search}
        style={inputStyle}
      /> */}
      <div style={divimg}>
        {/* <img
          style={{ height: "300px", width: "1000px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-aaDseiOZg7rKNOe3HcTJGnVIGzGL2zaMA&s"
        ></img> */}
        <img
          style={{
            height: "550px",
            width: "1400px",
            borderRadius: "100px",
            marginBottom: "60px",
            marginLeft: "-13px",
            marginTop: "-30px",
          }}
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2R1NmFweDlzemVjczN2bDRia2E2Yng2dmR5bmgxcXdlamZkczFidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dmhUYsPnkhrhfvZLwn/giphy.gif"
          
        />

        {/* <video src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2R1NmFweDlzemVjczN2bDRia2E2Yng2dmR5bmgxcXdlamZkczFidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dmhUYsPnkhrhfvZLwn/giphy.gif"></video> */}
      </div>
      <h2
        style={{
          marginTop: "-38px",
          fontWeight: "800",
          fontSize: "20px",
          fontFamily: " poppins ",
        }}
      >
        What's on your mind?
      </h2>

      <div style={slider}>
        <Slider />
        <hr
          style={{ border: "none", borderTop: "1px solid rgb(205, 211, 219)" }}
        ></hr>
      </div>
      <h2 style={h1}>Restaurants with online food delivery in Moradabad</h2>
      {!loader
        ? restaurants.map((r) => (
            <RestaurantCard
              key={r.id}
              name={r.name}
              image={r.image}
              cuisine={r.cuisines}
              rating={r.rating}
              offer={r.offer}
              items={r.items}
            />
          ))
        : Array(10)
            .fill("")
            .map((r, index) => <ShimmerLoader key={index} />)}
    </>
  );
};

export default Body;
