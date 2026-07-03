import "./Hero.css";
import heroArtwork from "../../assets/artworks/Ironman.jpeg";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="container hero-container">

        <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
        >

          <p className="hero-tag">
            FINE ART PORTRAIT ARTIST
          </p>

          <h1>
            EDWIN ADAMS
          </h1>

          <p className="hero-text">
            Creating realistic graphite portraits that preserve
            emotions, memories and moments forever through
            handcrafted pencil art.
          </p>

          <a href="#gallery" className="hero-btn">
            View Collection
          </a>

        </motion.div>

        <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >

          <img
            src={heroArtwork}
            alt="Artwork"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;