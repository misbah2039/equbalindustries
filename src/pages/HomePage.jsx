import { Link } from "react-router-dom";
import {
  homeCoreServices,
  partnerLogos,
  valuableCustomers,
  whyChooseUs,
} from "../data/content";

function HomePage() {
  const heroImagePath = "companylogo.jpeg";
  const partnerSlides = [...partnerLogos, ...partnerLogos];
  const whyChooseSlides = [
    { title: "Workshop Excellence", imagePath: "workshopexcellence.jpeg" },
    { title: "Trusted Team Support", imagePath: "teamsupport.jpeg" },
  ];
  const whyChooseSlidesLoop = [...whyChooseSlides, ...whyChooseSlides];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="kicker">
              Reliable service for every road and industry
            </p>
            <h2>Professional Car Care and Industrial Service Solutions</h2>
            <p>
              Equbal Industry and Car Services delivers trusted vehicle
              servicing, maintenance, and industrial support with a focus on
              quality, reliability, and customer satisfaction.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Book Service
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <img
              src={heroImagePath}
              alt="Company workshop hero"
              className="hero-image"
            />
            {/* <p className="image-path-note">Image path: {heroImagePath}</p> */}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <h3 className="section-title">Why Choose Equbal</h3>
          <div className="why-choose-wrap">
            <ul className="feature-list">
              {whyChooseUs.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="why-slider">
              <div className="why-slider-track">
                {whyChooseSlidesLoop.map((slide, index) => (
                  <article
                    className="why-slide"
                    key={`${slide.title}-${index}`}
                  >
                    <img src={slide.imagePath} alt={slide.title} />
                    <h4>{slide.title}</h4>
                    {/* <p className="image-path-note">
                      Image path: {slide.imagePath}
                    </p> */}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="section-title">Our Core Services</h3>
          <p className="page-intro">
            We provide three major service categories to support industrial,
            educational, and business growth requirements.
          </p>
          <div className="grid-cards">
            {homeCoreServices.map((service) => (
              <Link to="/services">
                <article className="card" key={service.title}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title-row">
            <h3 className="section-title">Our Partners</h3>
            {/* <Link to="/industries" className="inline-link">
              View Industries
            </Link> */}
          </div>
          {/* <p className="page-intro">
            Click any partner logo to open our industries page.
          </p> */}

          <div className="partners-slider">
            <div className="partners-track">
              {partnerSlides.map((partner, index) => (
                <Link
                  to="/partners"
                  className="partner-card"
                  key={`${partner.name}-${index}`}
                >
                  <img src={partner.imagePath} alt={partner.name} />
                  <p>{partner.name}</p>
                  {/* <p className="image-path-note">
                    Image path: {partner.imagePath}
                  </p> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-row">
            <h3 className="section-title">Our Valuable Customer</h3>
            {/* <Link to="/customers" className="inline-link">
              Open Customer Page
            </Link> */}
          </div>
          {/* <p className="page-intro">
            Click any customer card to open dedicated customer page.
          </p> */}

          <div className="grid-cards">
            {valuableCustomers.slice(0, 3).map((customer) => (
              <Link
                to="/customers"
                className="card customer-card-link"
                key={customer.name}
              >
                <img
                  src={customer.imagePath}
                  alt={customer.name}
                  className="customer-image"
                />
                <h4>{customer.name}</h4>
                <p>{customer.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
