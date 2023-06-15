import logo from "../assests/Logo.png";
import "../styles/Header.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          {props.links.map((link, index) => {
            return (
              <li key={index}>
                <Link aria-current="page" to={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
