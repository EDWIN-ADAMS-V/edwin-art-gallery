import "./Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      to: "hero",
    },
    {
      name: "Gallery",
      to: "gallery",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Contact",
      to: "contact",
    },
  ];

  return (
    <motion.header
      className={`navbar ${(scrolled || menuOpen) ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-container">

        {/* Logo */}

        <Link
          to="hero"
          smooth={true}
          duration={600}
          className="logo"
          onClick={closeMenu}
        >
          EA<span>.</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <ul className="nav-links">

            {navItems.map((item) => (

              <li key={item.to}>

                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-70}
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

        </nav>

        {/* Mobile Explore Button */}

        <button
          className="explore-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Explore
          <span className={`arrow ${menuOpen ? "rotate" : ""}`}>
            ▼
          </span>
        </button>

      </div>

      {/* Mobile Expandable Navigation */}

      <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>

        {navItems.map((item) => (

          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={600}
            spy={true}
            offset={-70}
            onClick={closeMenu}
          >
            {item.name}
          </Link>

        ))}

      </div>

    </motion.header>
  );
}

export default Navbar;