import { useMemo, useState } from "react";
import { socialContentItems, socialPlatforms } from "../data/socialContent";

function SocialContentPage() {
  const [platform, setPlatform] = useState("All");

  const filtered = useMemo(() => {
    if (platform === "All") return socialContentItems;
    return socialContentItems.filter((item) => item.platform === platform);
  }, [platform]);

  return (
    <section className="py-5 bg-body">
      <div className="container py-2">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10 text-center">
            <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
              Social media hub
            </p>
            <h1 className="display-6 fw-bold text-dark mb-3">
              YouTube, Instagram, Facebook, Twitter content
            </h1>
            <p className="text-secondary mb-0 mx-auto" style={{ maxWidth: "44rem" }}>
              Platform select karo aur usi platform ka content dekho. Naye posts
              add karne ke liye sirf `src/data/socialContent.js` update karna hoga.
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {socialPlatforms.map((name) => (
            <button
              key={name}
              type="button"
              className={`btn btn-sm rounded-pill px-3 ${
                platform === name ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setPlatform(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <p className="small text-secondary mb-3 text-center">
          Showing <strong>{filtered.length}</strong> items
        </p>

        <div className="row g-4">
          {filtered.map((item) => (
            <div className="col-md-6 col-xl-4" key={item.id}>
              <article className="card h-100 border-0 shadow-sm overflow-hidden">
                {item.embedUrl ? (
                  <div className="ratio ratio-16x9 bg-dark">
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="ratio ratio-16x9 bg-light">
                    <img src={item.thumbnail} alt={item.title} className="object-fit-cover" />
                  </div>
                )}
                <div className="card-body d-flex flex-column">
                  <div className="d-flex gap-2 mb-2">
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      {item.platform}
                    </span>
                    <span className="badge bg-secondary bg-opacity-10 text-secondary">
                      {item.type}
                    </span>
                  </div>
                  <h2 className="h6 fw-bold mb-2">{item.title}</h2>
                  <p className="small text-secondary mb-3 flex-grow-1">{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="small text-muted">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </span>
                    <a
                      href={item.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="small fw-semibold"
                    >
                      Open post ↗
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialContentPage;
