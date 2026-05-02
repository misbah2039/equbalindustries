import { Link, Navigate, useParams } from "react-router-dom";
import { getServiceCategoryBySlug } from "../data/content";

function FeeTable({ title, note, rows }) {
  if (!rows?.length) return null;
  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body p-4">
        <h2 className="h5 fw-bold text-dark mb-2">{title}</h2>
        {note ? (
          <p className="small text-secondary mb-3 equbal-readability-text">{note}</p>
        ) : null}
        <div className="table-responsive mb-0">
          <table className="table table-sm align-middle mb-0">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="bg-light text-dark fw-semibold small"
                    style={{ width: "38%", minWidth: "10rem" }}
                  >
                    {row.label}
                  </th>
                  <td className="small text-secondary equbal-readability-text">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ServiceLinePage() {
  const { serviceSlug } = useParams();
  const cat = getServiceCategoryBySlug(serviceSlug);

  if (!cat) {
    return <Navigate to="/services" replace />;
  }

  return (
    <section className="bg-body">
      <div className="equbal-page-hero text-white py-5">
        <div className="container py-3">
          <nav className="small mb-3" aria-label="Breadcrumb">
            <ol className="breadcrumb equbal-hero-breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/services" className="text-decoration-none">
                  Services
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {cat.title}
              </li>
            </ol>
          </nav>
          <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
            Service line
          </p>
          <h1 className="display-5 fw-bold mb-3 text-white">{cat.title}</h1>
          <p className="lead text-white-50 mb-0" style={{ maxWidth: "44rem" }}>
            {cat.tagline}
          </p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-lg-7">
            <p className="text-secondary mb-4 equbal-readability-text">{cat.overview}</p>
            {cat.applicantPageIntro ? (
              <p className="small text-dark bg-light border rounded-3 p-3 mb-4">
                <strong className="d-block mb-1">For applicants &amp; partners</strong>
                {cat.applicantPageIntro}
              </p>
            ) : null}

            <FeeTable
              title={cat.ownerFeesTitle}
              note={cat.ownerFeesNote}
              rows={cat.ownerFeesRows}
            />
            {cat.applicantFeesTitle && cat.applicantFeesRows?.length ? (
              <FeeTable
                title={cat.applicantFeesTitle}
                note="Final fee is confirmed on registration / PO — samples below for budgeting only."
                rows={cat.applicantFeesRows}
              />
            ) : null}

            <h2 className="h5 fw-bold text-dark mb-2">Highlights</h2>
            <ul className="list-unstyled d-grid gap-2 mb-4">
              {cat.highlights.map((h) => (
                <li key={h} className="d-flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ✓
                  </span>
                  <span className="text-secondary equbal-readability-text">{h}</span>
                </li>
              ))}
            </ul>
            <h2 className="h5 fw-bold text-dark mb-2">Offerings under this line</h2>
            <ul className="service-list mb-4">
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2">
              <Link
                to="/contact"
                className="btn btn-primary rounded-pill px-4 fw-semibold"
              >
                Enquire / apply
              </Link>
              <Link to="/services" className="btn btn-outline-secondary rounded-pill px-4">
                All services
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="rounded-4 overflow-hidden shadow ratio ratio-4x3 bg-light equbal-service-line-sticky">
              <img
                src={cat.imagePath}
                alt={cat.imageAlt}
                className="object-fit-cover w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceLinePage;
