import "./Contact.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (

    <section className="contact" id="contact">

      <div className="container">

        <p className="section-tag">
          CONTACT
        </p>

        <h2 className="contact-title">
          Let's Create Something Beautiful
        </h2>

        <p className="contact-description">
          Have an idea or want to commission a portrait?
          I'd love to hear from you.
        </p>

        <div className="contact-grid">

          <a
            href="https://wa.me/919600932548"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <FaWhatsapp className="contact-icon"/>

            <h3>WhatsApp</h3>

            <p>Start a Conversation</p>

          </a>

          <a
            href="https://instagram.com/eddicreates.in"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <FaInstagram className="contact-icon"/>

            <h3>Instagram</h3>

            <p>View My Latest Art</p>

          </a>

          <a
            href="mailto:eddicreates.in@gmail.com"
            className="contact-card"
          >

            <FaEnvelope className="contact-icon"/>

            <h3>Email</h3>

            <p>Professional Enquiries</p>

          </a>

        </div>

      </div>

    </section>

  );

}

export default Contact;