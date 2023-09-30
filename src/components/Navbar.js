import React, { useState } from "react";
import logo from "../assets/pics/logo.webp";
import "../components/navbar.css";
import DropdownNav from "./DropdownNav";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const Test = () => {};

  const navLink = [
    {
      name: "HOME",
      onPress: () => console.log("active"),
    },
    {
      onPress: () => console.log("active"),
      enter: () => console.log("enter"),
      leave: () => console.log("leave"),
      drop: <DropdownNav name={"CATEGORIES"} />,
    },
    {
      onPress: () => console.log("active"),
      enter: () => console.log("enter"),
      leave: () => console.log("leave"),
      drop: <DropdownNav name={"SHOP"} />,
    },
    {
      onPress: () => console.log("active"),
      onPress: "onpress",
    },
    {
      name: "CONTACT",
      onPress: () => console.log("active"),
    },
    {
      onPress: () => console.log("active"),
      drop: <DropdownNav name={"ACCOUNT"} />,
    },
    {
      name: "BLOG",
      onPress: () => console.log("active"),
    },
  ];
  return (
    <>
      <nav
        style={{ justifyContent: "space-between" }}
        className="navbar navbar-expand-lg navbar-light bg-light d-flex"
      >
        <div style={{ display: "flex" }}>
          <a className="navbar-brand" href="#">
            <img src={logo} width={100} />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navLink.map((link, index) => (
                <li
                  onClick={link.onPress}
                  onMouseEnter={link.enter}
                  onMouseLeave={link.leave}
                  key={index}
                  className="nav-item active nav-link"
                >
                  {link.name}
                  {link.drop}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="form-inline my-2 my-lg-0 flex-end bg-dark">
          <button>asdas</button>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
};
export default Navbar;
