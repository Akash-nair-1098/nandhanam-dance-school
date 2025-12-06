const services = [
  {
    title: "Classical Dance",
    description:
      "Learn the foundations of classical dance with structured training and expert guidance.",
    image:
      "https://media.istockphoto.com/id/944112198/photo/dance-form-indian-classical-feet-with-ghungru-bharatnatyam-katthak.jpg?s=612x612&w=0&k=20&c=yxh3UIca-HtGcwHw97kNwPTWwcaYyj5U063JFD6hl3M=",
  },
  {
    title: "Folk and Tribal Dance",
    description:
      "Experience the vibrancy of India’s diverse culture through energetic folk dance forms, taught with authenticity, rhythm, and a focus on traditional storytelling.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8sT3p35N4u-F3Hg68-JXCV_37axh4sqGJQ&s",
  },
  {
    title: "Contemporary Dance",
    description:
      "Blend creativity, fluid movement, and modern techniques in a dynamic contemporary dance program designed to encourage expression and artistic freedom.",
    image:
      "https://thumbs.dreamstime.com/b/contemporary-dancer-energetically-jumping-air-against-colorful-background-showcasing-artistic-movement-expression-308807412.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 themed-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Discover the World of Dance</h2>
          <p className="text-muted">
            From timeless traditions to modern expressions, we train dancers of
            all styles.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <div className="card service-card h-100 border-0 themed-card">
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted themed-card-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


