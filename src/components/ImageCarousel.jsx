import React from "react";

export default function ImageGallery() {
  // Fallback images (same vibe, same size, instantly available)
  const fallback1 =
    "https://images.unsplash.com/photo-1543351356-4f75b6b7dc08?w=1200&h=800&fit=crop";
  const fallback2 =
    "https://images.unsplash.com/photo-1518611013296-7c6f67a2e1c3?w=1200&h=800&fit=crop";
  const fallback3 =
    "https://images.unsplash.com/photo-1537368917898-967b5c9f9e77?w=1200&h=800&fit=crop";

  return (
    <section id="gallery" className="py-5 themed-section">
      <div className="text-center mb-5">
        <h2 className="fw-bold">The Nandhanam Showcase</h2>
        <p className="text-muted">
          A visual journey through our training, talent, and tradition.
        </p>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.nandhanam.net/images/gallery/pictures/b2.jpg"
              onError={(e) => {
                e.target.src = fallback1;
              }}
              className="d-block w-100"
              alt="Nandhanam Dance Performance 1"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.nandhanam.net/images/gallery/pictures/b8.jpg"
              onError={(e) => {
                e.target.src = fallback2;
              }}
              className="d-block w-100"
              alt="Nandhanam Dance Performance 2"
              loading="lazy"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.nandhanam.net/images/gallery/pictures/b5.jpg"
              onError={(e) => {
                e.target.src = fallback3;
              }}
              className="d-block w-100"
              alt="Nandhanam Dance Performance 3"
              loading="lazy"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
