import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className={style.navbar}>
      <h1 className={style.title}>Seguimiento</h1>
      <hr className={style.line} />
      <div className={style.rutes}>
        <NavLink
          to="/"
          className={`${style.rute} ${activeLink === "/" && style.ruteActive}`}
          onClick={() => handleClick("/")}
        >
          Mi informacion
        </NavLink>
        <NavLink
          to="/2"
          className={`${style.rute} ${activeLink === "/2" && style.ruteActive}`}
          onClick={() => handleClick("/2")}
        >
          Avance por persona
        </NavLink>
        <NavLink
          to="/3"
          className={`${style.rute} ${activeLink === "/3" && style.ruteActive}`}
          onClick={() => handleClick("/3")}
        >
          Avance por tema
        </NavLink>
      </div>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
