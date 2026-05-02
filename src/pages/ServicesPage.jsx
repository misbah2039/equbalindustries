import { Link } from "react-router-dom";
import { serviceCategories } from "../data/content";

function ServicesPage() {
  return (
    <section className="bg-body">
      <div className="equbal-page-hero text-white py-5">
        <div className="container py-3">
          <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
            What we deliver
          </p>
          <h1 className="display-5 fw-bold mb-3 text-white">Services</h1>
          <p className="lead text-white-50 mb-0" style={{ maxWidth: "40rem" }}>
            Three dedicated lines — engineering &amp; field, education &amp;
            events, and marketing &amp; trade. Each has its own scope, team, and
            delivery model. Open a line for fees, retainers, and applicant-facing
            detail.
          </p>
        </div>
      </div>

      <div className="sticky-top bg-body border-bottom shadow-sm py-3 z-2">
        <div className="container">
          <nav
            aria-label="Jump to service category"
            className="d-flex flex-wrap gap-2 justify-content-center"
          >
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                className="btn btn-sm btn-outline-primary rounded-pill px-3"
                to={`/services/${cat.id}`}
              >
                {cat.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center mb-5 pb-3 border-bottom">
          <div className="col-lg-10 text-center">
            <p className="text-secondary mb-0 equbal-readability-text">
              Each line has a dedicated page with indicative fees and terms. For
              workshop assets we use on site, see{" "}
              <Link to="/equipment" className="fw-semibold">
                Equipment
              </Link>
              .
            </p>
          </div>
        </div>

        {serviceCategories.map((cat, index) => (
          <article
            key={cat.id}
            id={cat.id}
            className={`equbal-anchor row align-items-center g-4 g-lg-5 mb-5 pb-5 ${
              index < serviceCategories.length - 1 ? "border-bottom" : ""
            }`}
          >
            <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
              <span className="badge bg-primary bg-opacity-10 text-primary mb-2">
                Service line {index + 1}
              </span>
              <h2 className="h2 fw-bold text-dark mb-2">{cat.title}</h2>
              <p className="lead fs-6 text-primary fw-semibold mb-3">
                {cat.tagline}
              </p>
              <p className="text-secondary mb-3 equbal-readability-text">
                {cat.overview}
              </p>
              <p className="mb-4">
                <Link
                  to={`/services/${cat.id}`}
                  className="btn btn-primary rounded-pill px-4 fw-semibold"
                >
                  Full detail &amp; fees →
                </Link>
              </p>
              <h3 className="h6 text-uppercase text-muted letter-spacing small mb-2">
                Highlights
              </h3>
              <ul className="list-unstyled d-grid gap-2 mb-4">
                {cat.highlights.map((h) => (
                  <li key={h} className="d-flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ✓
                    </span>
                    <span className="equbal-readability-text">{h}</span>
                  </li>
                ))}
              </ul>
              <h3 className="h6 text-uppercase text-muted letter-spacing small mb-2">
                Offerings under this line
              </h3>
              <ul className="service-list mb-0">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
              <div className="rounded-4 overflow-hidden shadow ratio ratio-4x3 bg-light">
                <img
                  src={cat.imagePath}
                  alt={cat.imageAlt}
                  className="object-fit-cover w-100 h-100"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesPage;
