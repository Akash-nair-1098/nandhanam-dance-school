const highlights = [
  {
    icon: "bi-person-badge-fill",
    title: "Experienced & Qualified Instructors",
    text: "Our faculty includes professionally trained artists with years of experience from Kerala Kalamandalam, ensuring authentic technique, disciplined training, and personalized guidance for every student.",
  },
  {
    icon: "bi-journal-check",
    title: "Structured Curriculum & Holistic Training",
    text: "We follow a well-designed syllabus that balances theory and practice, helping students understand rhythm, expressions, posture, and stage presence—shaping them into complete performers.",
  },
  {
    icon: "bi-camera-reels-fill",
    title: "Regular Performances & Stage Opportunities",
    text: "Students get opportunities to participate in stage programs, annual showcases, cultural events, and competitions, helping build confidence and real-world performance experience.",
  },
  {
    icon: "bi-people-fill",
    title: "Safe, Supportive & Inclusive Environment",
    text: "We provide a nurturing atmosphere where learners of all ages—kids to adults—can grow at their own pace while feeling supported, encouraged, and valued throughout their artistic journey..",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-5 why-us-section themed-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Makes Us Unique</h2>
          <p>
            Shaping graceful dancers through authentic training and dedicated
            guidance.
          </p>
        </div>
        <div className="row g-4">
          {highlights.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.title}>
              <div className="p-4 rounded-4 shadow-sm h-100 text-center why-card themed-card">
                <div className="icon-circle mx-auto mb-3">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted mb-0 themed-card-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


