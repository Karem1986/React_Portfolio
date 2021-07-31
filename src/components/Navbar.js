import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../themeContext";
export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  //Scroll effect:
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    // <header className={navbarClasses.join(" ")}>
    <header className={`${theme}-theme`}>
      <nav className="nav">
        <ul className="ul">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="game">Have fun!</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <Button />
        </ul>
      </nav>
    </header>
  );
}
