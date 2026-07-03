import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-brand">

          <h2>
            EA<span>.</span>
          </h2>

          <p>
            Realistic graphite portraits handcrafted with precision,
            passion and timeless artistry.
          </p>

        </div>

        <div className="footer-links">

          <h4>Navigation</h4>

          <a href="#hero">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <h4>Connect</h4>

          <a
            href="https://wa.me/919600932548"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>

          <a href="mailto:YOURMAIL@gmail.com">
            <FaEnvelope /> Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Edwin Adams.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;