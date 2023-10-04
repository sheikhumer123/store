import React, { useState } from "react";

import "../navbar/navbar.css";
import DropdownNav from "./DropdownNav";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../Logo";

const Navbar = () => {
  const NavSideSection = () => {
    return (
      <>
        <div className="navRightSection">
          <i>
            <DarkModeIcon />
          </i>

          <i>
            <SearchIcon />
          </i>
          <i>
            <FavoriteBorderIcon />
          </i>
          <i>
            <ShoppingCartIcon />
          </i>
          <i>
            <AccountCircleIcon />
          </i>
        </div>
      </>
    );
  };

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
      name: "SERVICES",
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
      <div className="navContainer ">
        <nav
          style={{ padding: 0 }}
          className="navbar navbar-expand-lg navbar-light navWidth"
        >
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              style={{ color: "red" }}
              className="navbar-toggler-icon"
            ></span>
          </button>
          <div className=" responsiveForm">
            <NavSideSection />
          </div>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ml-3">
              {navLink.map((link, index) => (
                <>
                  <li
                    style={{
                      padding: "0px 10px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={link.onPress}
                    onMouseEnter={link.enter}
                    onMouseLeave={link.leave}
                    key={index}
                    className="nav-item active nav-link navLi "
                  >
                    {link.name}

                    {link.drop}
                  </li>
                </>
              ))}
            </ul>
            <div className=" responsiveForm2">
              <NavSideSection />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
