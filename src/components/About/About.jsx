import "./About.css";
import { FaPalette, FaPencilAlt, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <div className="container about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="artist-placeholder">

            <div className="placeholder-circle">
              ✏️
            </div>

            <h3>Your Artist Portrait</h3>

            <p>
              Coming Soon
            </p>

            <span>
              Until then,<br />
              my artwork tells my story.
            </span>

          </div>

        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="section-tag">
            BEHIND EVERY STROKE
          </p>

          <h2>
            Every Portrait Begins With A Memory.
          </h2>

          <p className="about-text">
            Hi, I'm <strong>Edwin Adams</strong>, a realistic graphite portrait
            artist from Salem, India. Every artwork I create is handcrafted
            with patience, precision and attention to the smallest details.
            My goal isn't simply to draw a face—it's to preserve emotions,
            memories and moments that can be cherished for a lifetime.
          </p>

          <div className="about-stats">

            <div className="stat-card">
              <FaPalette />
              <h3>50+</h3>
              <p>Artworks</p>
            </div>

            <div className="stat-card">
              <FaPencilAlt />
              <h3>100%</h3>
              <p>Hand Drawn</p>
            </div>

            <div className="stat-card">
              <FaMapMarkerAlt />
              <h3>Salem</h3>
              <p>India</p>
            </div>

            <div className="stat-card">
              <FaHeart />
              <h3>∞</h3>
              <p>Passion</p>
            </div>

          </div>

          <blockquote>

            "Every portrait begins with a memory worth preserving."

          </blockquote>

        </motion.div>

      </div>

    </section>
  );
}

export default About;