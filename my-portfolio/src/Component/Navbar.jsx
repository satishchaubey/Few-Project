import React, { useState } from "react";
import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
          <ul className="ul__list">
            {links.map(({ name, icon, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav__link active-nav" : "nav__link"
                    }
                    onClick={()=>setShowMenu(!showMenu)}
                  >
                    {icon}
                    <h3 className="nav__name">{name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${
            showMenu ? "nav_toggle animation-toggle" : "nav_toggle"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <FaBarsStaggered />
          ) : (
            <>
              <FaBars />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
