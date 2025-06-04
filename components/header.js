import { MdOutlineHome } from "react-icons/md";
import { LuBadgeHelp } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
 const inputStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "4px",
  height: "30px",
  width: "320px",
  outline: "none",
};

const stylee = {
  fontFamily: "Roboto",
  fontWeight: "bold",
  color: "black",
  display: "inline-block",
  marginLeft: "70px",
  fontSize: "19px",
  fontWeight: "600",
};
const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "60px",
  // border:"2px solid black"
  boxShadow: "0px 2px 7px rgba(132, 119, 119, 0.2)",
  height: "90px",
  width: "auto",
};
const img = {
  height: "80px",
  width: "160px",
  borderRadius: "40px",
  marginLeft: "40px",
};
const ite = {
  padding: "10px",
};
const h1 = {
  fontFamily: "Roboto",
  fontWeight: "bold",
};

const Tital = () => {
  return (
    <>
      <img
        src="https://th.bing.com/th/id/OIP.zeYbojw3hyzUz8DIzfVnagHaEK?rs=1&pid=ImgDetMain"
        alt="foodvilla"
        style={img}
      />
    </>
  );
};
export const HeaderComponent = () => {
  return (
    <>
      <div style={header} className="header">
        <Tital />
        <div className="items">
          <ul style={ite}>
            <li style={stylee}>
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                <MdOutlineHome /> Home
              </a>
            </li>

            <li style={stylee}>
              <a
                href="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <LuBadgeHelp /> About
              </a>
            </li>
            <li style={stylee}>
              <a
                href="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                <IoMdContact /> Contact
              </a>
            </li>
            <li style={stylee}>
              <a
                href="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FiShoppingCart /> Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h1 style={h1}>Restaurants with online food delivery in Moradabad</h1>
    </>
  );
};
