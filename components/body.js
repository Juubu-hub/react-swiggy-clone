import React, { useEffect, useState } from "react";
import RestaurantCard from "./card";

const inputStyle = {
  display:"flex",
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "4px",
  height: "30px",
  width: "320px",
  outline: "none",
};

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/getAllData");
    const data = await response.json();
    setRestaurants(data);
    setFilteredRes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Search = (e) => {
    const text = e.target.value;
    const filtered = restaurants.filter((r) =>
      r.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRes(filtered);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for restaurants and food"
        onChange={Search}
        style={inputStyle}
      />

      {filteredRes.map((r) => (
        <RestaurantCard
          key={r.id}
          name={r.name}
          image={r.image}
          cuisine={r.cuisines}
          rating={r.rating}
          offer={r.offer}
          items={r.items}
        />
      ))}
    </>
  );
};

export default Body;

