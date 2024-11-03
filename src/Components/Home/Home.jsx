// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import ProfileIMG from "/assets/Images/Profile.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="wrapper">
          <div className="name-and-title">
            <div className="headings">
              <h1 className="name">Hello there!</h1>
              <h1>
                I&#39;M <span>Shruti Soni</span>
              </h1>
              <h1 className="title">A FrontEnd Developer</h1>
            </div>

            <div className="buttons">
              <div className="about-btn">
                <button>
                  {/* <a href="/about">About</a> */}
                  <Link to={"/about"}>About</Link>
                </button>
              </div>
              <div className="contact-btn">
                <button>
                  <Link to={"/contact"}>Contact</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="profile-image">
            <img src={ProfileIMG} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
