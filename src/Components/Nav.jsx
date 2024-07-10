import React from "react";
import Home from "./Home";
import About from "./About";
import User from "./User";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink
        style={(e) => ({
          color: e.isActive ? "tomato" : "",
          fontWeight: e.isActive ? "bold" : "",
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        
        to="/about"
      >
     {(e) => (
            <span className={
                [
                    e.isActive? "text-red-500" : "",
                   
                  ].join(" ")
            }>About</span>
        )}
      </NavLink>
      <NavLink
        className={(e) => (
            [
                e.isActive? "text-red-500" : "text-gray-700",
                e.isActive? "border-b-2 border-red-500" : "",
              ].join(" ")
        )}
        to="/user"
      >
        User
      </NavLink>
    </nav>
  );
};

export default Nav;


// yha jo hamne style ke through kiya hai use 3 ways me kar sakte hain.
// 1. style, 2. children, 3. className.