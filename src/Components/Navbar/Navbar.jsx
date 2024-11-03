// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdStars } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Shruti Soni</h1>
        </div>
        <div className="navigation-links">
          <ul>
            <div className="link-container">
              <div>
                <i>
                  <IoHomeOutline />
                </i>
              </div>
              <div>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              </div>
            </div>
            <div className="link-container">
              <div>
                <i>
                  <FaRegUser />
                </i>
              </div>
              <div>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
              </div>
            </div>
            <div className="link-container">
              <div>
                <i>
                  <MdStars />
                </i>
              </div>
              <div>
                <li>
                  <Link to={"/experience"}>Experience</Link>
                </li>
              </div>
            </div>
            <div className="link-container">
              <div>
                <i>
                  <GoProjectSymlink />
                </i>
              </div>
              <div>
                <li>
                  <Link to={"/projects"}>Projects</Link>
                </li>
              </div>
            </div>
            <div className="link-container">
              <div>
                <i>
                  <FiPhoneCall />
                </i>
              </div>
              <div>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
