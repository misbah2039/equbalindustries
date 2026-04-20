import { Link } from "react-router-dom";
import { partnerLogos } from "../data/content";

function PartnersPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title-row">
          <h2 className="page-title">Our Partners</h2>
          <Link to="/services" className="inline-link">
            Explore Services
          </Link>
        </div>

        <p className="page-intro">
          We collaborate with trusted partners to deliver reliable results
          across engineering, training, marketing, and trade services.
        </p>

        <div className="grid-cards">
          {partnerLogos.map((partner) => (
            <article className="card" key={partner.name}>
              <img
                src={partner.imagePath}
                alt={partner.name}
                className="customer-image"
              />
              <h3>{partner.name}</h3>
              <p>
                Strategic collaboration partner for multi-domain projects and
                service delivery.
              </p>
              {/* <p className="image-path-note">Image path: {partner.imagePath}</p> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersPage;
