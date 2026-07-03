import "./Featured.css";
import artworks from "../../data/artworks";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Featured() {
  const featuredArtworks = artworks.filter(
    (art) => art.featured
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        (prev + 1) % featuredArtworks.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredArtworks.length]);

  const artwork = featuredArtworks[current];

  return (
    <section className="featured">

      <div className="container">

        <p className="section-tag">
          FEATURED COLLECTION
        </p>

        <AnimatePresence mode="wait">

          <motion.div
            key={artwork.id}
            className="featured-container"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
          >

            <div className="featured-image">

    <img
        src={artwork.image}
        alt={artwork.title}
    />

    <div className="featured-overlay">

        Click to View

    </div>

</div>

            <div className="featured-content">

              <h2>{artwork.title}</h2>

              <p className="featured-description">
                {artwork.description}
              </p>

              <p className="featured-meta">

                {artwork.medium}

                &nbsp; • &nbsp;

                {artwork.size}

                &nbsp; • &nbsp;

                {artwork.status}

              </p>

            </div>

          </motion.div>

        </AnimatePresence>

        <div className="featured-navigation">

<button
onClick={() =>
setCurrent(
(current - 1 + featuredArtworks.length) %
featuredArtworks.length
)
}
>

❮

</button>

<button
onClick={() =>
setCurrent(
(current + 1) %
featuredArtworks.length
)
}
>

❯

</button>

</div>

<div className="featured-dots">

          {featuredArtworks.map((_, index) => (

            <span
              key={index}
              className={
                current === index
                  ? "active-dot"
                  : ""
              }
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Featured;