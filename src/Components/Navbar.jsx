import React from "react";
import "./NavStyle.css";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

function Navbar() {
  return (
    <>
      <nav>
        <section className="nav-logo">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </section>
        <section className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Mentors</a>
            </li>
            <li>
              <a href="">Doubts</a>
            </li>
          </ul>
          <img src={user} alt="user" className="user" />
          <i className="fa-solid fa-bars menu"></i>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
