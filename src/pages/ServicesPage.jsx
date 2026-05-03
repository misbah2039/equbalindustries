import { Link } from "react-router-dom";
import { serviceCategories } from "../data/content";

const STEPS = [
  {
    n: "1",
    title: "Pick a line",
    text: "Engineering, education & events, or marketing & trade.",
  },
  {
    n: "2",
    title: "Read scope",
    text: "Tagline, highlights, and offerings on this page.",
  },
  {
    n: "3",
    title: "Open fees page",
    text: "Indicative owner fees, retainers, and how to apply.",
  },
];

function ServicesPage() {
  return (
    <section className="bg-body">
      <div className="equbal-page-hero text-white py-5">
        <div className="container py-3">
          <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
            What we deliver
          </p>
          <h1 className="display-5 fw-bold mb-3 text-white">Services</h1>
          <p className="lead text-white-50 mb-4" style={{ maxWidth: "42rem" }}>
            Three clear lines — each with its own team, tools, and commercial
            model. Use the cards below, then open the dedicated page for fees
            and applicant-facing detail.
          </p>
          <div className="row g-3 equbal-services-steps">
            {STEPS.map((s) => (
              <div className="col-md-4" key={s.n}>
                <div className="equbal-services-step h-100">
                  <span className="equbal-services-step-num">{s.n}</span>
                  <h2 className="h6 fw-bold text-white mb-1">{s.title}</h2>
                  <p className="small text-white-50 mb-0">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky-top bg-body border-bottom shadow-sm py-3 z-2">
        <div className="container">
          <p className="small text-secondary text-center mb-2 mb-md-0 d-md-none">
            Jump to a line
          </p>
          <nav
            aria-label="Open service line pages"
            className="d-flex flex-wrap gap-2 justify-content-center"
          >
            {serviceCategories.map((cat) => (
              <Link
                key={cat.id}
                className="btn btn-sm btn-primary rounded-pill px-3"
                to={`/services/${cat.id}`}
              >
                {cat.title} — fees &amp; detail
              </Link>
            ))}
            <Link
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              to="/contact"
            >
              Ask a question
            </Link>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-4 mb-lg-5">
          <h2 className="h4 fw-bold text-dark">Choose your service line</h2>
          <p
            className="text-secondary mb-0 mx-auto equbal-readability-text"
            style={{ maxWidth: "40rem" }}
          >
            Each card opens the full line page (scope, tables, and how to
            enquire). Workshop equipment we deploy is listed separately on{" "}
            <Link to="/equipment" className="fw-semibold">
              Equipment
            </Link>
            .
          </p>
        </div>

        <div className="row g-4">
          {serviceCategories.map((cat, index) => (
            <div className="col-lg-4" key={cat.id}>
              <article className="card h-100 border-0 shadow-sm equbal-service-summary-card overflow-hidden">
                <div className="ratio ratio-16x9 bg-light">
                  <img
                    src={cat.imagePath}
                    alt=""
                    className="object-fit-cover"
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <span className="badge bg-primary bg-opacity-10 text-primary align-self-start mb-2">
                    Line {index + 1}
                  </span>
                  <h3 className="h5 fw-bold text-dark mb-2">{cat.title}</h3>
                  <p className="small text-primary fw-semibold mb-3">
                    {cat.tagline}
                  </p>
                  <p className="small text-secondary flex-grow-1 equbal-readability-text">
                    {cat.overview.slice(0, 160)}
                    {cat.overview.length > 160 ? "…" : ""}
                  </p>
                  <ul className="list-unstyled small mb-4">
                    {cat.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="d-flex gap-2 mb-1">
                        <span className="text-success" aria-hidden>
                          ✓
                        </span>
                        <span className="equbal-readability-text">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="d-grid gap-2 mt-auto">
                    <Link
                      to={`/services/${cat.id}`}
                      className="btn btn-primary rounded-pill fw-semibold"
                    >
                      Open fees &amp; full detail
                    </Link>
                    <Link
                      to="/contact"
                      className="btn btn-outline-secondary btn-sm rounded-pill"
                    >
                      Enquire for this line
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-top">
          <h3 className="h6 text-uppercase text-muted letter-spacing mb-3 text-center">
            At a glance
          </h3>
          <div className="table-responsive rounded-3 border shadow-sm">
            <table className="table table-hover align-middle mb-0 small">
              <thead className="table-light">
                <tr>
                  <th scope="col">Line</th>
                  <th scope="col" className="d-none d-md-table-cell">
                    Best for
                  </th>
                  <th scope="col" className="text-end">
                    Next step
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceCategories.map((cat) => (
                  <tr key={cat.id}>
                    <td className="fw-semibold text-dark">{cat.title}</td>
                    <td className="d-none d-md-table-cell text-secondary">
                      {cat.tagline}
                    </td>
                    <td className="text-end">
                      <Link
                        to={`/services/${cat.id}`}
                        className="fw-semibold text-nowrap"
                      >
                        View page →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
