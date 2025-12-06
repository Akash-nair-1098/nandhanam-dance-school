import logo from "../assets/images/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section text-center text-white d-flex align-items-center themed-section"
    >
      <div className="container">
        {/* <span className="badge mb-3 text-uppercase themed-hero-badge">Premium Services</span> */}
        <img
          src={logo}
          alt="Nandhanam School of Dance Logo"
          className="mb-3"
          style={{ width: "200px", height: "200" }} // adjust size
        />
        <h1 className="display-4 fw-bold mb-3">Nandhanam School of Dance</h1>
        <p className="lead mb-4" style={{ color: "#f5b31f" }}>
          Invoking the divine Manthra and seeking the blessing of the cosmic
          dancer Nataraja, Nandhanam School of Dance commenced its Classical
          Dance classes in April 2010, incorporating the traditions of Kerala
          Kalamandalam and with faculties who honed their skills from Kerala
          Kalamandalam.
        </p>
        {/* <div className="d-flex flex-column flex-sm-row justify-content-center gap-6">
         
          <a href="#contact" className="btn btn-outline-danger btn-lg px-4 text-uppercase fw-semibold">
            Get Free Quote
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
