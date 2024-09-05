import "./NavBar.css";
import { Link } from "react-scroll";
import { useState } from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <div>
        <Link to="hero">
          <img
            className="logo"
            src="/assets/img/logo.svg"
          />
        </Link>
      </div>
      <ul className="navItems">
        <li className="nav-item">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Testimonials
          </Link>
        </li>
      </ul>
      <div className="contactMe">
        <button className="contact-btn">
          <Link
            type="button"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={500}
          >
            Contact Me
          </Link>
        </button>
      </div>
    </nav>
  );
}
