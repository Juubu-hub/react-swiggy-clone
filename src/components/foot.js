import React, { Component } from "react";

const style = {
  outerdiv: {
    height: "auto",
    width: "100%",
    paddingLeft: "50px",
    // backgroundColor: "#F0F0F5",
    backgroundColor: "#F0F0F5",
  },
  innerdiv: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "66px",
    maxWidth: "211px",
    marginTop: "75px",
    marginLeft: "25px",
  },
  img2: {
    marginTop: "75px",
    height: "66px",
    maxWidth: "211px",
    marginLeft: "20px",
  },
  h1: {
    marginTop: "90px",
    color: "#3D4046",
    fontWeight: "900",
    fontSize: "23px",
    fontFamily: "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
  },

  div: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gridTemplateRows: "repeat(1,1fr)",
    gap: "30px",
    paddingTop: "20px",
    paddingBottom: "40px",
    textAlign: "left",
  },
  footer: {
    fontFamily:
      "outfit,Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serifs",
    height: "30px",
    width: "150px",
    textDecoration: "none",
    // color: "#0B4342",
    color: "#E00867",

    listStyleType: "none",
  },
  imgfoot: {
    height: "120px",
    width: "210px",
    listStyleType: "none",
    textDecoration: "none",
    color: "#616469",
    fontFamily: "Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  imgfoot2: {
    listStyleType: "none",
  },
};

const Footer = () => {
  return (
    <div style={style.outerdiv}>
      <div style={style.innerdiv}>
        <ul style={style.imgfoot2}>
          {/* <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_xK0pudnYyCKfQKi3s47b2uyh8ig235KTw&s"
              alt="foodvilla"
              style={style.imgfoot}
            />
          </li> */}
          <li>
            <h3
              style={{
                fontSize: "80px",
                // color: "#0B4342",
                color: "#E00867",
                fontFamily: "poppins",
                fontWeight: "700",
                display: "flex",
                marginRight: "200px",
                marginTop: "40px",
                marginBottom: "-20px",
              }}
            >
              <img
                style={{ height: "100px", width: "100px" }}
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXpoZ3FqMmh4M2lkbHl3bHk5NDloNnJmemJydTlkMXBnajlmazV6NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/eg3qhh49UEBLHqi4J7/giphy.gif"
              ></img>{" "}
              foodora{" "}
            </h3>
          </li>
        </ul>
        {/* <h1 style={style.h1}>
          For better experience,download the Swiggy app now
        </h1> */}
        {/* <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
          <img
            style={style.img}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="Download Android App"
          ></img>
        </a>
        <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
          <img
            style={style.img2}
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="Download iOS App"
          ></img>
        </a> */}
      </div>
      <div style={style.div}>
        <ul>
          <li style={style.footer}>
            <h2>Company</h2>
          </li>
          <li style={style.footer}>
            <a>About Us</a>
          </li>
          <li style={style.footer}>
            <a>foodora Corporate</a>
          </li>
          <li style={style.footer}>
            <a>Careers</a>
          </li>
          <li style={style.footer}>
            <a>Team</a>
          </li>
          <li style={style.footer}>
            <a>foodora One</a>
          </li>
          <li style={style.footer}>
            <a>foodora Instamart</a>
          </li>
          <li style={style.footer}>
            <a>foodora Dineout</a>
          </li>
          <li style={style.footer}>
            <a>foodora Genie</a>
          </li>
          <li style={style.footer}>
            <a>Minis</a>
          </li>
          <li style={style.footer}>
            <a>Pyng</a>
          </li>
        </ul>
        <ul>
          <li style={style.footer}>
            <h2>Contact us</h2>
          </li>
          <li style={style.footer}>
            <a>Help & Support</a>
          </li>
          <li style={style.footer}>
            <a>Partner with us</a>
          </li>
          <li style={style.footer}>
            <a>Ride with us</a>
          </li>
        </ul>
        <ul>
          <li style={style.footer}>
            <h2>Available in:</h2>
          </li>
          <li style={style.footer}>
            <a>Bangalore</a>
          </li>
          <li style={style.footer}>
            <a>Gurgaon</a>
          </li>
          <li style={style.footer}>
            <a>Hyderabad Delhi</a>
          </li>
          <li style={style.footer}>
            <a>Mumbai</a>
          </li>
          <li style={style.footer}>
            <a>pune</a>
          </li>
          <li style={style.footer}>
            <select style={{ backgroundColor: "#cda3b6ff", color: "white" }}>
              <option>679 cities</option>

              <option>Bangalore</option>
              <option>Gurgaon</option>
              <option>Hyderabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Kolkata</option>
              <option>Chennai</option>
              <option>Ahmedabad</option>
              <option>Chandigarh</option>
              <option>Jaipur</option>
              <option>Kochi</option>
              <option>Coimbatore</option>
              <option>Lucknow</option>
              <option>Nagpur</option>
              <option>Vadodara</option>
              <option>Indore</option>
              <option>Guwahati</option>
              <option>Visakhapatnam</option>
              <option>Surat</option>
              <option>Dehradun</option>
              <option>Noida</option>
              <option>Ludhiana</option>
              <option>Trichy</option>
              <option>Vijayawada</option>
              <option>Kanpur</option>
              <option>Mysore</option>
              <option>Nashik</option>
              <option>Udaipur</option>
              <option>Pondicherry</option>
              <option>Agra</option>
              <option>Aurangabad</option>
              <option>Jalandhar</option>
              <option>Kota</option>
              <option>Madurai</option>
              <option>Allahabad</option>
              <option>Manipal</option>
              <option>Amritsar</option>
              <option>Bareilly</option>
              <option>Meerut</option>
              <option>Bhopal</option>
              <option>Ooty</option>
              <option>Bhubaneswar</option>
              <option>Raipur</option>
              <option>Bikaner</option>
              <option>Rajkot</option>
              <option>Kozhikode</option>
              <option>Central Goa</option>
              <option>Sirsa</option>
              <option>Gwalior</option>
              <option>Thrissur</option>
              <option>Kharagpur</option>
              <option>Tirupati</option>
              <option>Tirupur</option>
              <option>Vellore</option>
              <option>Thiruvananthapuram</option>
              <option>Warangal</option>
              <option>Varanasi</option>
              <option>Mangaluru</option>
              <option>Patna</option>
              <option>Ranchi</option>
              <option>Faridabad</option>
              <option>Guntur</option>
              <option>Ujjain</option>
              <option>Patiala</option>
              <option>Karnal</option>
              <option>Kakinada</option>
              <option>Rajahmundry</option>
              <option>Bilaspur</option>
              <option>Bhilai</option>
              <option>Anand</option>
              <option>Bhavnagar</option>
              <option>Jammu</option>
              <option>Muktsar</option>
              <option>Panipat</option>
              <option>Jamshedpur</option>
              <option>Dhanbad</option>
              <option>Bokaro</option>
              <option>Hubli</option>
              <option>Belgaum</option>
              <option>Jabalpur</option>
              <option>Kolhapur</option>
              <option>Solapur</option>
              <option>Shillong</option>
              <option>Cuttack</option>
              <option>Aligarh</option>
              <option>Salem</option>
              <option>Agartala</option>
              <option>Jodhpur</option>
              <option>...</option>
            </select>
          </li>
        </ul>
        <ul>
          <li style={style.footer}>
            <h2>Lifeatfoodora</h2>
          </li>

          <li style={style.footer}>
            <a>Explore with foodora</a>
          </li>
          <li style={style.footer}>
            <a>foodora News</a>
          </li>
          <li style={style.footer}>
            <a>Snackables</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
