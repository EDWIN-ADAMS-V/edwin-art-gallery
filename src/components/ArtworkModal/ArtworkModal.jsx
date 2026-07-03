import "./ArtworkModal.css";

function ArtworkModal({ artwork, onClose }) {
  if (!artwork) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Edwin,

I'm interested in purchasing this artwork.

Title: ${artwork.title}
Medium: ${artwork.medium}
Size: ${artwork.size}
Price: ₹${artwork.price}

Please let me know if it is still available.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-image">

          <img
  src={artwork.image}
  alt={artwork.title}
  loading="eager"
/>

        </div>

        <div className="modal-content">

          <p className="modal-tag">
            ARTWORK DETAILS
          </p>

          <h2>{artwork.title}</h2>

          <p className="modal-description">
            {artwork.description}
          </p>

          <div className="modal-info">

            <div>
              <span>Medium</span>
              <h4>{artwork.medium}</h4>
            </div>

            <div>
              <span>Size</span>
              <h4>{artwork.size}</h4>
            </div>

            <div>
              <span>Status</span>
              <h4>{artwork.status}</h4>
            </div>

          </div>

          <h3 className="modal-price">
  {artwork.price !== null
    ? `₹${artwork.price.toLocaleString()}`
    : "Showcase Artwork"}
</h3>

          {artwork.status !== "Showcase" && (
  <a
    href={`https://wa.me/919600932548?text=${whatsappMessage}`}
    target="_blank"
    rel="noreferrer"
    className="modal-btn"
  >
    Order on WhatsApp
  </a>
)}

        </div>

      </div>

    </div>
  );
}

export default ArtworkModal;