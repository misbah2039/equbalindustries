import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import {
  homeCoreServices,
  partnerLogos,
  valuableCustomers,
  whyChooseUs,
} from "../data/content";

const HERO_SLIDES = [
  // { src: "companylogo.jpeg", label: "Equbal — brand & trust" },
  { src: "carworkshop.jpg", label: "Workshop & car care" },
  { src: "carworkshop_1.jpg", label: "Service bays" },
  { src: "carworkshop_2.jpg", label: "Paint & detailing" },
  { src: "engineeringandfieldservices.jpg", label: "Industrial & field" },
  { src: "educationandeventservices.jpg", label: "Events & training" },
  // { src: "misbah.jpg", label: "Misbah International School" },
];

const WHY_ICONS = ["⚙️", "📋", "⏱️", "🤝", "📍", "✅"];

function clamp50(text) {
  const t = (text || "").trim();
  if (t.length <= 50) return t;
  return `${t.slice(0, 49).trim()}…`;
}

function HomePage() {
  const partnerSlides = [...partnerLogos, ...partnerLogos];
  const customerSlides = [...valuableCustomers, ...valuableCustomers];

  return (
    <>
      <div className="equbal-home-hero-wrap">
        <div className="container-fluid px-0">
          <div
            id="homeHeroCarousel"
            className="carousel slide carousel-fade equbal-home-hero-carousel"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-indicators equbal-home-hero-indicators">
              {HERO_SLIDES.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  data-bs-target="#homeHeroCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? "active" : ""}
                  aria-current={i === 0 ? "true" : undefined}
                  aria-label={`Slide ${i + 1}: ${slide.label}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {HERO_SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                >
                  <div className="equbal-home-hero-slide">
                    <img
                      src={slide.src}
                      alt=""
                      className="equbal-home-hero-img"
                    />
                    <div className="equbal-home-hero-overlay" />
                    <p className="equbal-home-hero-slide-title">
                      {slide.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev equbal-home-hero-ctrl"
              type="button"
              data-bs-target="#homeHeroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next equbal-home-hero-ctrl"
              type="button"
              data-bs-target="#homeHeroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="equbal-home-hero-bar text-center">
          <div className="container py-4 py-lg-5 equbal-home-hero-bar-inner">
            <p className="equbal-home-hero-brand mb-2 mx-auto">
              Equbal Industries &amp; Car Services
            </p>
            <p className="equbal-home-hero-kicker text-uppercase small fw-bold mb-2 mx-auto">
              Industrial strength · Automotive precision · Pan-India reach
            </p>
            <h1 className="equbal-home-hero-heading mb-3 mx-auto">
              One partner for workshop, field, and growth
            </h1>
            <p className="equbal-home-hero-lead mb-4 mx-auto">
              Car care, diagnostics, civil &amp; MEP support, events, and trade
              — disciplined teams, clear reporting, offices in Lucknow, Delhi,
              and Dehradun.
            </p>
            <div
              className="equbal-hero-stats equbal-home-hero-stats mb-4 justify-content-center mx-auto"
              aria-label="Highlights"
            >
              <div className="equbal-hero-stat">
                <strong>3</strong>
                <span>Cities</span>
              </div>
              <div className="equbal-hero-stat">
                <strong>9–9</strong>
                <span>Support window</span>
              </div>
              <div className="equbal-hero-stat">
                <strong>∞</strong>
                <span>Repeat clients</span>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg rounded-pill px-4 fw-semibold"
              >
                Book service
              </Link>
              <Link
                to="/services"
                className="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold border-2"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="home-trust-strip" aria-label="Brand highlights">
        <div className="container home-trust-inner">
          <span className="home-trust-item">Industrial &amp; field</span>
          <span className="home-trust-sep" aria-hidden />
          <span className="home-trust-item">Car care &amp; diagnostics</span>
          <span className="home-trust-sep" aria-hidden />
          <span className="home-trust-item">Events &amp; training</span>
          <span className="home-trust-sep" aria-hidden />
          <span className="home-trust-item">Trade &amp; marketing</span>
        </div>
      </section>

      <section className="section section-alt equbal-why-section">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-4">
            <div className="col-lg-8">
              <p className="section-eyebrow">Why us</p>
              <h3 className="section-title section-title-accent mb-2">
                Why teams pick Equbal
              </h3>
              <p className="page-intro mb-0">
                No endless marquee — just what actually matters on the ground.
              </p>
            </div>
          </div>
          <div className="row g-3 g-lg-4">
            {whyChooseUs.map((point, i) => (
              <div className="col-md-6 col-xl-4" key={`why-${i}`}>
                <div className="equbal-why-tile h-100">
                  <span className="equbal-why-tile-icon" aria-hidden>
                    {WHY_ICONS[i % WHY_ICONS.length]}
                  </span>
                  <p className="equbal-why-tile-text mb-0">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-eyebrow">What we offer</p>
          <h3 className="section-title section-title-accent">
            Core service lines
          </h3>
          <p className="page-intro">
            Three pillars — engineering &amp; field, education &amp; events, and
            marketing &amp; trade — built for institutions, fleets, and growing
            businesses. Open a line for fees, owner terms, and how to apply.
          </p>
          <div className="grid-cards home-service-grid">
            {homeCoreServices.map((service, i) => (
              <Link
                to={`/services/${service.slug}`}
                key={service.title}
                className="home-service-link"
              >
                <article className="card home-service-card">
                  <span className="home-service-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <span className="home-service-cta">Fees &amp; detail →</span>
                </article>
              </Link>
            ))}
          </div>
          <p className="small text-secondary text-center mt-3 mb-0 equbal-readability-text">
            Quick links:{" "}
            <Link to="/services/engineering-field" className="fw-semibold">
              Engineering &amp; field
            </Link>
            {" · "}
            <Link to="/services/education-event" className="fw-semibold">
              Education &amp; events
            </Link>
            {" · "}
            <Link to="/services/marketing-trade" className="fw-semibold">
              Marketing &amp; trade
            </Link>
            {" · "}
            <Link to="/services" className="fw-semibold">
              All services
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-blog py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-8">
              <p className="section-eyebrow">Insights</p>
              <h3 className="section-title section-title-accent mb-2">
                From our blog
              </h3>
              <p className="page-intro mb-0">
                Field notes — maintenance, safety, and events — written by
                people who do the work.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/blog" className="inline-link">
                All posts
              </Link>
            </div>
          </div>
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-decoration-none text-reset d-block h-100"
                >
                  <article className="card h-100 border-0 shadow-sm equbal-blog-card overflow-hidden position-relative">
                    <div className="ratio ratio-16x9 bg-light">
                      <img
                        src={post.imagePath}
                        alt=""
                        className="object-fit-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body d-flex flex-column p-4">
                      <span className="badge bg-primary bg-opacity-10 text-primary align-self-start mb-2">
                        {post.tag}
                      </span>
                      <h4 className="h5 card-title fw-bold text-dark">
                        {post.title}
                      </h4>
                      <p className="card-text text-secondary small flex-grow-1">
                        {post.excerpt}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-2 small text-muted">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <span className="text-primary fw-semibold">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="partners-strip">
        <div className="container">
          <div className="section-title-row">
            <div>
              <p className="section-eyebrow">Network</p>
              <h3 className="section-title section-title-accent">
                Partner logos
              </h3>
            </div>
          </div>
          <p className="page-intro">
            A snapshot of collaborators — details stay with your account team.
          </p>

          <div className="partners-slider">
            <div className="partners-track">
              {partnerSlides.map((partner, index) => (
                <div
                  className="partner-card partner-card--static"
                  key={`${partner.name}-${index}`}
                >
                  <img src={partner.imagePath} alt="" />
                  <p>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-customers">
        <div className="container">
          <div className="section-title-row">
            <div>
              <p className="section-eyebrow">Trust</p>
              <h3 className="section-title section-title-accent">
                What customers say
              </h3>
            </div>
            <Link to="/customers" className="inline-link home-customers-link">
              Full profiles
            </Link>
          </div>
          <p className="page-intro home-customers-intro">
            Ratings and 50-character quotes — tap through to the customers page
            for more.
          </p>

          <div className="customers-slider">
            <div className="customers-track">
              {customerSlides.map((customer, index) => (
                <Link
                  to="/customers"
                  className="customer-slide-card"
                  key={`${customer.name}-${index}`}
                >
                  <img
                    src={customer.imagePath}
                    alt={customer.name}
                    className="customer-slide-image"
                  />
                  <div className="customer-slide-body">
                    <h4>{customer.name}</h4>
                    <p className="customer-slide-quote">
                      “{clamp50(customer.shortQuote)}”
                    </p>
                    <p className="customer-slide-rating small text-muted mb-0">
                      ★ {customer.rating?.toFixed(1) ?? "5.0"} / 5
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
