import { Link } from "react-router-dom";
import AboutPresenceMap from "../components/AboutPresenceMap";
import { useAuth } from "../context/AuthContext";
import { companyPresenceLocations } from "../data/companyPresenceLocations";
import { companyDocuments } from "../data/companyDocuments";
import { leadershipTeam } from "../data/content";

const values = [
  {
    title: "Safety & clarity",
    body: "Permits, PPE, and plain-language updates on every job — industrial or automotive.",
  },
  {
    title: "Measurable handover",
    body: "Checklists and sign-off steps so nothing is “assumed done.”",
  },
  {
    title: "Long-term posture",
    body: "We optimise for relationships, not one-off invoices.",
  },
];

function AboutPage() {
  const { isAuthenticated } = useAuth();
  const featuredLeader = leadershipTeam.find((member) => member.featured);
  const supportLeaders = leadershipTeam.filter((member) => !member.featured);

  return (
    <div className="about-advanced equbal-about-bg">
      <header className="equbal-page-hero text-white py-5 mb-0">
        <div className="container py-4">
          <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
            About us
          </p>
          <h1 className="display-5 fw-bold mb-3 text-white">
            Built in workshops. Proven on sites.
          </h1>
          <p className="lead text-white-50 mb-0" style={{ maxWidth: "42rem" }}>
            Equbal Industries &amp; Car Services combines automotive craft with
            industrial execution — one operating rhythm, three cities, dozens of
            service lines.
          </p>
        </div>
      </header>

      <section className="py-5 border-bottom equbal-surface-panel">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="h3 fw-bold text-dark mb-3">Who we are</h2>
              <p className="text-body-secondary lh-lg mb-3">
                We are not a generic “agency conglomerate.” Our roots are in
                bays, tools, and customer cars — then we scaled the same
                discipline into civil support, HVAC, events, and trade.
              </p>
              <p className="text-body-secondary lh-lg mb-0">
                That means your project manager speaks the same language as your
                technician: timelines are realistic, risks are called early, and
                quality is checked before we ask for payment.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="equbal-stat-bubble h-100">
                    <strong className="equbal-stat-bubble-num">3</strong>
                    <span className="small text-secondary">Offices</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="equbal-stat-bubble h-100">
                    <strong className="equbal-stat-bubble-num">6-10</strong>
                    <span className="small text-secondary">Daily window</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="equbal-stat-wide">
                    <span className="fw-semibold d-block mb-1">Coverage</span>
                    <span className="small opacity-90">
                      Automotive · Civil &amp; MEP support · Events &amp;
                      training · Marketing &amp; import–export
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 equbal-surface-muted">
        <div className="container">
          <h2 className="h3 fw-bold text-dark text-center mb-2">
            Registrations &amp; certificates
          </h2>
          <p
            className="text-body-secondary text-center mb-4 mx-auto small"
            style={{ maxWidth: "36rem" }}
          >
            Official documents we maintain for compliance and tenders.{" "}
            <strong className="text-dark">Admin sign-in</strong> unlocks bulk
            download from the{" "}
            <Link to="/company-documents" className="fw-semibold">
              Company documents
            </Link>{" "}
            portal.
          </p>
          <div className="row g-3">
            {companyDocuments.map((doc) => (
              <div className="col-md-6 col-xl-4" key={doc.id}>
                <article className="card border-0 shadow-sm h-100 equbal-cert-card">
                  <div className="card-body p-4">
                    <div className="equbal-cert-badge mb-2" aria-hidden>
                      PDF
                    </div>
                    <h3 className="h6 fw-bold text-dark mb-2">{doc.title}</h3>
                    <p className="small text-body-secondary mb-3">
                      {doc.short}
                    </p>
                    {isAuthenticated ? (
                      <Link
                        to="/company-documents"
                        className="btn btn-primary btn-sm rounded-pill"
                      >
                        Open downloads
                      </Link>
                    ) : (
                      <p className="small text-muted mb-0">
                        <Link to="/login" className="fw-semibold">
                          Admin login
                        </Link>{" "}
                        required for downloads.
                      </p>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 equbal-surface-panel">
        <div className="container">
          <h2 className="h3 fw-bold text-dark text-center mb-4">
            Operating principles
          </h2>
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-4" key={v.title}>
                <article className="equbal-value-card h-100">
                  <h3 className="h6 fw-bold text-dark mb-2">{v.title}</h3>
                  <p className="small text-body-secondary mb-0">{v.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-12">
              <h2 className="h3 fw-bold text-dark mb-3">
                Mission &amp; vision
              </h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="equbal-mv-card h-100">
                    <h3 className="h6 text-primary mb-2">Mission</h3>
                    <p className="small text-body-secondary mb-0">
                      Keep fleets and industrial assets reliable with honest
                      timelines, trained people, and transparent costs.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="equbal-mv-card h-100">
                    <h3 className="h6 text-primary mb-2">Vision</h3>
                    <p className="small text-body-secondary mb-0">
                      Be the name enterprises and families both trust when
                      quality cannot be negotiated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 equbal-leadership-showcase border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
            <div>
              <p className="section-eyebrow mb-1">Leadership</p>
              <h2 className="h3 fw-bold text-dark mb-1">
                Leadership team and credentials
              </h2>
              <p className="small text-body-secondary mb-0">
                Dedicated section for owner and leadership depth, qualifications,
                and experience.
              </p>
            </div>
            <span className="badge text-bg-light border rounded-pill px-3 py-2">
              Team leaders: {leadershipTeam.length}
            </span>
          </div>
          <div className="row g-3">
            {featuredLeader ? (
              <div className="col-12">
                <article className="equbal-lead-card equbal-lead-card--featured">
                  <div className="row g-0 align-items-stretch">
                    <div className="col-sm-5 col-lg-4">
                      <div className="ratio ratio-1x1 h-100 bg-light">
                        <img
                          src={featuredLeader.imagePath}
                          alt={featuredLeader.imageAlt || featuredLeader.name}
                          className="object-fit-cover rounded-start-3"
                        />
                      </div>
                    </div>
                    <div className="col-sm-7 col-lg-8 p-4">
                      <span className="badge bg-warning text-dark mb-2">
                        Featured owner
                      </span>
                      <h3 className="h5 fw-bold mb-1">{featuredLeader.name}</h3>
                      <p className="small text-body-secondary mb-2">
                        {featuredLeader.role}
                      </p>
                      <div className="equbal-lead-meta">
                        <span className="equbal-lead-chip">
                          Degree: {featuredLeader.degree}
                        </span>
                        <span className="equbal-lead-chip">
                          Experience: {featuredLeader.experience}
                        </span>
                      </div>
                      {featuredLeader.degreeList?.length ? (
                        <div className="equbal-lead-degree-box mt-3">
                          <p className="small fw-semibold mb-2">
                            Owner qualifications
                          </p>
                          <ul className="small mb-0">
                            {featuredLeader.degreeList.map((deg) => (
                              <li key={deg}>{deg}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {featuredLeader.certifications?.length ? (
                        <div className="equbal-lead-cert-wrap mt-3">
                          <p className="small fw-semibold mb-2">
                            Additional certifications
                          </p>
                          <div className="equbal-lead-meta">
                            {featuredLeader.certifications.map((cert) => (
                              <span className="equbal-lead-chip" key={cert}>
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </div>
            ) : null}
            {supportLeaders.map((member) => (
              <div className="col-md-6 col-xl-4" key={member.name}>
                <article className="equbal-lead-card h-100">
                  <div className="ratio ratio-4x3 bg-light rounded-top-3">
                    <img
                      src={member.imagePath}
                      alt={member.imageAlt || member.name}
                      className="object-fit-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="h6 fw-bold mb-1">{member.name}</h3>
                    <p className="small text-body-secondary mb-2">
                      {member.role}
                    </p>
                    <div className="equbal-lead-meta">
                      <span className="equbal-lead-chip">
                        Degree: {member.degree}
                      </span>
                      <span className="equbal-lead-chip">
                        Experience: {member.experience}
                      </span>
                    </div>
                    {member.certifications?.length ? (
                      <details className="mt-2">
                        <summary className="small fw-semibold text-primary">
                          Certifications
                        </summary>
                        <div className="equbal-lead-meta mt-2">
                          {member.certifications.map((cert) => (
                            <span className="equbal-lead-chip" key={cert}>
                              {cert}
                            </span>
                          ))}
                        </div>
                      </details>
                    ) : null}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 border-top border-bottom bg-white">
        <div className="container">
          <h2 className="h3 fw-bold text-dark text-center mb-2">
            Presence &amp; reach
          </h2>
          <p
            className="text-body-secondary text-center mb-2 mx-auto"
            style={{ maxWidth: "40rem" }}
          >
            Head offices in <strong className="text-dark">Lucknow</strong>,{" "}
            <strong className="text-dark">Delhi</strong>, and{" "}
            <strong className="text-dark">Dehradun</strong> — we support{" "}
            <strong className="text-dark">pan-India</strong> projects and
            mobility programmes where scope and timelines align with our teams.
          </p>
          {/* <p
            className="small text-center text-muted mb-4 mx-auto"
            style={{ maxWidth: "42rem" }}
          >
            Map pins below use <strong>dummy latitude / longitude</strong> for
            ten sample points — replace with your real coordinates in{" "}
            <code className="small">src/data/companyPresenceLocations.js</code>.
          </p> */}
          <AboutPresenceMap />
          <div className="table-responsive mt-4 rounded-3 border shadow-sm">
            <table className="table table-sm table-striped align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Location</th>
                  <th scope="col">Role</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col" className="text-end">
                    Open map
                  </th>
                </tr>
              </thead>
              <tbody>
                {companyPresenceLocations.map((loc, i) => (
                  <tr key={loc.id}>
                    <td>{i + 1}</td>
                    <td className="fw-semibold text-dark">{loc.name}</td>
                    <td className="small text-secondary">{loc.role}</td>
                    <td>
                      <code className="small">{loc.lat.toFixed(4)}</code>
                    </td>
                    <td>
                      <code className="small">{loc.lon.toFixed(4)}</code>
                    </td>
                    <td className="text-end">
                      <a
                        className="small fw-semibold text-nowrap"
                        href={`https://www.openstreetmap.org/?mlat=${loc.lat}&mlon=${loc.lon}#map=12/${loc.lat}/${loc.lon}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        OSM →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="small text-center text-muted mt-3 mb-0">
            Map tiles © OpenStreetMap contributors — indicative points, not a
            legal boundary.
          </p>
        </div>
      </section>
      <section className="py-5 bg-dark text-white">
        <div className="container text-center py-3">
          <h2 className="h4 fw-bold mb-3 text-white">Next step</h2>
          <p
            className="text-white-50 small mb-4 mx-auto"
            style={{ maxWidth: "28rem" }}
          >
            Tell us the city, the asset (vehicle / site / event), and your
            window — we will route it to the right desk in one go.
          </p>
          <Link
            to="/contact"
            className="btn btn-warning btn-lg rounded-pill fw-semibold px-4"
          >
            Contact Equbal
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
