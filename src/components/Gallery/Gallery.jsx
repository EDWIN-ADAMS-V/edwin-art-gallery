import "./Gallery.css";
import artworks from "../../data/artworks";
import ArtworkCard from "../ArtworkCard/ArtworkCard";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import { useMemo, useState } from "react";

function Gallery() {
    
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = useMemo(
  () => ["All", ...new Set(artworks.map((art) => art.category))],
  []
);

const filteredArtworks =
  selectedCategory === "All"
    ? artworks
    : artworks.filter(
        (art) => art.category === selectedCategory
      );
    return (
    <section className="gallery" id="gallery">

      <div className="container">

        <p className="gallery-subtitle">
          COLLECTION
        </p>

        <h2 className="gallery-title">
          Art Gallery
        </h2>
        <div className="gallery-filters">

  {categories.map((category) => (

    <button
      key={category}
      className={
        selectedCategory === category
          ? "active-filter"
          : ""
      }
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>

  ))}

</div>
        <div className="gallery-grid">

          {filteredArtworks.map((artwork) => (
                <div
                    key={artwork.id}
                    onClick={() => setSelectedArtwork(artwork)}
                >

                    <ArtworkCard artwork={artwork} />

                </div>
            ))}

        </div>

      </div>
       <ArtworkModal

    artwork={selectedArtwork}

    onClose={() => setSelectedArtwork(null)}

/>     
    </section>
  );
}

export default Gallery;