import React, { useEffect, useState } from "react";
import RestaurantCard from "../components/card";
import ShimmerLoader from "../components/shimer";

const inputStyle = {
  display: "flex",
  border: "none",
  backgroundColor: "rgb(240, 241, 244)",
  borderRadius: "10px",
  padding: "4px",
  paddingLeft: "15px",
  height: "40px",
  width: "510px",
  outline: "none",
  position: "absolute",
  top: "110px",
  left: "550px",
};

const Search = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/getAllData");
    const data = await response.json();
    setRestaurants(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Sear = (e) => {
    const text = e.target.value;
    setSearchText(text);

    setLoader(true);

    const filtered = restaurants.filter((r) =>
      r.name.toLowerCase().includes(text.toLowerCase())
    );

    setTimeout(() => {
      setFilteredRes(filtered);
      setLoader(false);
    }, 300);
  };

  return (
    <div style={{ paddingTop: "50px", paddingLeft: "120px" }}>
      <input
        type="text"
        placeholder="Search for restaurants and food"
        onChange={Sear}
        style={inputStyle}
      />

      {searchText.length > 0 && (
        <>
          {loader ? (
            Array(6)
              .fill("")
              .map((r, index) => <ShimmerLoader key={index} />)
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
