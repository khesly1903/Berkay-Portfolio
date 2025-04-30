import { useEffect, useState, useRef } from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faNewspaper,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      if (prevScrollPos > currentScrollPos) {
        // Scroll up - show navbar
        navbarRef.current.style.top = "0";
      } else {
        // Scroll down - hide navbar
        navbarRef.current.style.top = "-50px";
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <ul className="navbar-list">
        <li>
          <a href="/" className="nav-link">
            <FontAwesomeIcon icon={faHouse} className="nav-link-icon" />
            <p className="nav-link-text">Home</p>
          </a>
        </li>
        <li>
          <a href="/articles" className="nav-link">
            <FontAwesomeIcon icon={faNewspaper} className="nav-link-icon" />
            <p className="nav-link-text">Articles</p>
          </a>
        </li>
        <li>
          <a href="/projects" className="nav-link">
            <FontAwesomeIcon icon={faCode} className="nav-link-icon" />
            <p className="nav-link-text">Projects</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}