import { leadershipTeam } from "../data/content";

function AboutPage() {
  const featuredLeader = leadershipTeam.find((member) => member.featured);
  const supportLeaders = leadershipTeam.filter((member) => !member.featured);
  const railLeaders = [
    ...(featuredLeader ? [featuredLeader] : []),
    ...supportLeaders,
  ];

  return (
    <section className="section about-page">
      <div className="container-wide">
        <div className="about-page-layout">
          <aside className="about-leadership-rail" aria-label="Leadership team">
            <h3 className="rail-title">Our Team</h3>
            <p className="rail-intro">CEO, MD &amp; Operational Manager</p>
            <div className="rail-cards">
              {railLeaders.map((member) => (
                <article
                  className={`rail-card ${member.featured ? "rail-card-featured" : ""}`}
                  key={member.name}
                >
                  <img
                    src={member.imagePath}
                    alt={member.imageAlt || member.name}
                    className="rail-card-image"
                  />
                  <div className="rail-card-body">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <div className="about-main">
            <div className="about-page-hero">
              <p className="kicker about-kicker about-hero-kicker">
                Corporate Profile
              </p>
              <h2>About Equbal Industry and Car Services</h2>
              <p>
                We deliver dependable automotive care, industrial support, and
                multi-domain business services with a commitment to quality,
                transparency, and long-term partnerships.
              </p>
            </div>

            <div className="about-hero">
              <div className="about-text">
                <h3 className="section-title about-subheading">Who we are</h3>
                <p>
                  Equbal Industry and Car Services is built on practical expertise
                  and modern execution standards. From vehicle servicing to
                  engineering and training solutions, we align our work with your
                  operational goals.
                </p>
                <p>
                  Our teams focus on clear communication, disciplined delivery,
                  and measurable outcomes so clients can rely on us for both
                  routine service and complex projects.
                </p>
              </div>

              <div className="about-highlight">
                <h4>Our standards</h4>
                <ul>
                  <li>Skilled technicians and coordinated project teams</li>
                  <li>Quality checks at every stage of service</li>
                  <li>Honest timelines and cost visibility</li>
                  <li>Support that extends beyond project completion</li>
                </ul>
              </div>
            </div>

            <div className="about-mission-grid">
              <article className="about-mission-card">
                <h3>Mission</h3>
                <p>
                  To provide reliable, professional services that keep businesses
                  and fleets running efficiently while maintaining the highest
                  standards of safety and customer care.
                </p>
              </article>
              <article className="about-mission-card">
                <h3>Vision</h3>
                <p>
                  To be a preferred partner for industrial and automotive
                  solutions across regions—known for trust, innovation, and
                  consistent execution.
                </p>
              </article>
            </div>

            <div className="about-stats">
              <article className="about-stat-card">
                <h3>Multi-domain expertise</h3>
                <p>
                  Engineering, education, marketing, and hands-on service
                  delivery under one coordinated structure.
                </p>
              </article>
              <article className="about-stat-card">
                <h3>Client-first operations</h3>
                <p>
                  Structured processes and responsive support designed around real
                  business needs.
                </p>
              </article>
              <article className="about-stat-card">
                <h3>Partnership mindset</h3>
                <p>
                  We invest in relationships that grow with your organisation
                  over the long term.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
