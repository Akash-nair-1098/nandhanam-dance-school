import React, { useState } from "react";

const videos = [
  {
    id: "J2e-YD4tGPo",
    type: "youtube", // ← ADD THIS
    title: "Welcome to Our Platform",
    thumbnail: "https://img.youtube.com/vi/J2e-YD4tGPo/maxresdefault.jpg",
  },
  {
    id: "ptAcn1rBNdc",
    type: "youtube", // ← ADD THIS
    title: "How It Works",
    thumbnail: "https://img.youtube.com/vi/ptAcn1rBNdc/maxresdefault.jpg",
  },
  {
    id: "bSq_IGkKPtA",
    type: "youtube", // ← ADD THIS
    title: "Customer Success Story",
    thumbnail: "https://img.youtube.com/vi/bSq_IGkKPtA/maxresdefault.jpg",
  },
  {
    type: "direct", // ← This one is correct
    url: "https://videos.pexels.com/video-files/4713259/4713259-uhd_2560_1440_30fps.mp4",
    title: "Flying Seagulls - Pexels",
    thumbnail: "https://images.pexels.com/videos/4713259/maxresdefault.jpg",
  },
];

// Fallback image (hosted on a reliable CDN)
const FALLBACK_THUMBNAIL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuA2abw2XQ0IpcwMulbHUNw2L5oIA9nTBSQA&s";

export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbErrors, setThumbErrors] = useState({});

  const handleThumbError = (index) => {
    setThumbErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          {/* <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Video Gallery</h2>
            <p className="text-muted lead">Click to play full screen</p>
          </div> */}

          <div id="videoCarousel" className="carousel slide">
            <div className="carousel-indicators">
              {videos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#videoCarousel"
                  data-bs-slide-to={i}
                  className={i === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <div className="carousel-inner">
              {videos.map((video, i) => (
                <div
                  key={i}
                  className={`carousel-item ${
                    i === activeIndex ? "active" : ""
                  }`}
                >
                  <div className="d-flex justify-content-center px-4">
                    <div
                      className="card border-0 shadow-lg overflow-hidden video-card cursor-pointer"
                      style={{ maxWidth: "900px", width: "100%" }}
                      onClick={() => setSelectedVideo(video)}
                      role="button"
                    >
                      <div className="position-relative bg-dark">
                        <img
                          src={
                            thumbErrors[i]
                              ? FALLBACK_THUMBNAIL
                              : video.thumbnail
                          }
                          alt={video.title}
                          className="card-img-top"
                          style={{ height: "500px", objectFit: "cover" }}
                          onError={() => handleThumbError(i)}
                        />
                        {/* Play Button */}
                        <div className="position-absolute top-50 start-50 translate-middle">
                          <div className="bg-white bg-opacity-90 rounded-circle p-4 shadow-lg">
                            <svg
                              width="80"
                              height="80"
                              viewBox="0 0 24 24"
                              fill="#dc3545"
                            >
                              <path d="M8 5v14l11-7L8 5z" />
                            </svg>
                          </div>
                        </div>
                        {/* Optional: Show title overlay if no image */}
                        {/* {thumbErrors[i] && (
                          <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h5 className="text-white text-center mb-0">{video.title}</h5>
                          </div>
                        )} */}
                      </div>
                      {/* <div className="card-body text-center bg-white py-4">
                        <h4 className="mb-0 fw-bold">{video.title}</h4>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="prev"
              onClick={() =>
                setActiveIndex((i) => (i - 1 + videos.length) % videos.length)
              }
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="next"
              onClick={() => setActiveIndex((i) => (i + 1) % videos.length)}
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedVideo && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.98)" }}
          onClick={() => setSelectedVideo(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content border-0 bg-transparent">
              <div className="modal-header border-0 justify-content-end p-3">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedVideo(null)}
                />
              </div>
              <div className="modal-body p-4">
                <div className="ratio ratio-16x9">
                  {selectedVideo.type !== "direct" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-3 shadow-lg"
                    />
                  ) : (
                    <video
                      src={selectedVideo.url}
                      controls
                      autoPlay
                      className="rounded-3 shadow-lg"
                      style={{ width: "100%", height: "100%" }}
                    >
                      Your browser does not support video.
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}