import { MdOutlineHome } from "react-icons/md";
import { LuBadgeHelp } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
// import { useSelector } from "react-redux";
import Active from "../components/onof";
import { Link } from "react-router-dom";

const inputStyle = {
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "4px",
  height: "30px",
  width: "320px",
  outline: "none",
};

const stylee = {
  fontFamily: "outfit",
  fontWeight: "700",
  display: "inline-block",
  marginLeft: "70px",
  fontSize: "19px",
};

const header = {
  backgroundColor: "#ffffffff",
  // backgroundColor:"#E00867",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "60px",
  boxShadow: "0px 2px 6px rgba(132, 119, 119, 0.2)",
  height: "80px",
  width: "1670px",
  // position: 'fixed',
  // backgroundColor:"white",
};

const img = {
  height: "105px",
  width: "245px",
  borderRadius: "15px",
  marginLeft: "110px",
};

const ite = {
  padding: "10px",
  display: "flex",
  listStyle: "none",
};

const Tital = () => (
  <img
    src="https://www.foodora.com/wp-content/uploads/2024/12/Foodora_Logo_Cherry-Pink_RGB-1.png"
    alt="foodvilla"
    style={img}
  />
);

export const HeaderComponent = () => {
  return (
    <>
      <div style={header}>
        <Tital />
        <ul style={ite}>
          <li style={stylee}>
            <Link
              to="/search"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000ff"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>{" "}
              <span>Search</span>
            </Link>
          </li>
          <li style={stylee}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000ff"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>{" "}
              <span>Home</span>
            </Link>
          </li>
          <li style={stylee}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <LuBadgeHelp size={26} /> <span>About</span>
            </Link>
          </li>
          <li style={stylee}>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#050505ff"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              <span>Contact</span>
            </Link>
          </li>
          <li style={stylee}>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
                // marginLeft:'200px',
                marginRight: "120px",
                gap: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000ff"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>{" "}
              <span>Cart</span>
              {/* {!Active ? "❤️" : "💚"}? */}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
