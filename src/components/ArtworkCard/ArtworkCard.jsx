import "./ArtworkCard.css";

function ArtworkCard({ artwork }) {
  return (
    <div className="artwork-card">

      <div className="artwork-image">

        <img
          src={artwork.image}
          alt={artwork.title}
        />

      </div>

      <div className="artwork-info">

        <h3>{artwork.title}</h3>

        <p>{artwork.medium}</p>

        <div className="artwork-meta">

          <span>{artwork.size}</span>

          <span className="status">
            {artwork.status}
          </span>

        </div>

        <h2>
  {artwork.price !== null
    ? `₹${artwork.price.toLocaleString()}`
    : "Showcase"}
</h2>

      </div>

    </div>
  );
}

export default ArtworkCard;