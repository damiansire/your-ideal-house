import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const menuOptions = [
  {
    text: "Inicio",
    link: "/",
  },
  {
    text: "Ver Lista",
    link: "/all-houses",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <header>
          <div className="title-container-Navbar">
            <span className="navbarTitle"> Tu casa ideal </span>
          </div>
          <div>
            <nav className="navbar">
              <ul>
                {menuOptions.map((option) => {
                  return (
                    <li>
                      <a href={option.link} className="optionLink-Navbar">
                        <div className="option-Navbar">
                          <div>
                            <svg
                              width="44"
                              height="51"
                              viewBox="0 0 44 51"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="5.28125"
                                y="2.89062"
                                width="32.4688"
                                height="47.6094"
                                stroke="#575656"
                              />
                              <rect
                                x="18.0312"
                                y="41.1406"
                                width="6.96875"
                                height="9.35938"
                                stroke="#575656"
                              />
                              <rect
                                x="8.46875"
                                y="6.07812"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="8.46875"
                                y="15.6406"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="8.46875"
                                y="25.2031"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="18.0312"
                                y="6.07812"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width="42.0312"
                                height="2.1875"
                                stroke="#575656"
                              />
                              <rect
                                x="18.0312"
                                y="15.6406"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="18.0312"
                                y="25.2031"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="27.5938"
                                y="6.07812"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="27.5938"
                                y="15.6406"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                              <rect
                                x="27.5938"
                                y="25.2031"
                                width="6.96875"
                                height="6.17188"
                                stroke="#575656"
                              />
                            </svg>
                          </div>
                          <div className="optionText-Navbar">{option.text}</div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
