import React from "react";
import { aboutUs } from "../utilities/strings";

const Footer = () => {
  // Coordinates of Nandhanam School (you can change these)
  const latitude = 29.2769; // Example: Mangaf/Salmiya area
  const longitude = 48.0588;

  // Or use exact address (better for accuracy)
  const address = "Nandhanam School of Dance, Salmiya, Kuwait";

  // This creates the correct Google Maps link
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&query=${encodeURIComponent(
    address
  )}`;

  return (
    <footer className="footer-section themed-footer py-4 px-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-3">
        <div>
          <h5 className="fw-bold mb-1">Nandhanam School of Dance</h5>
          <p className="mb-0">Abbassiya – Mangaf – Salmiya</p>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-item d-flex align-items-center mb-2">
            <i className="bi bi-envelope-fill me-2 text-warning"></i>
            <a href="mailto:info@nandhanam.net">info@nandhanam.net</a>
          </div>
          <div className="footer-contact-item d-flex align-items-center mb-2">
            <i className="bi bi-telephone-fill me-2 text-warning"></i>
            <a href="tel:+96525649543">+965 25649543</a>
          </div>
          <div className="footer-contact-item d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bi fw-medium text-primary hover-text-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="d-flex gap-3 fs-4">
          {["facebook", "instagram"].map((network) => {
            const href =
              network === "facebook"
                ? "https://www.facebook.com/nandhanamkuwait"
                : "https://instagram.com";
            return (
              <a
                key={network}
                href={href}
                className="footer-icon-link hover-lift"
                aria-label={network}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi bi-${network}`}></i>
              </a>
            );
          })}
        </div>
      </div>

      <h5>About Us</h5>
      <p className="text-muted" style={{ fontSize: "0.8rem" }}>
        {aboutUs}
      </p>

      {/* Optional: Small copyright at bottom */}
      <div className="text-center mt-4 pt-3 border-top border-secondary-subtle">
        <small className="text-muted">
          © {new Date().getFullYear()} Nandhanam School of Dance. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
