import { gallerySamples } from "../data/content";

function GalleryPage() {
  return (
    <section className="py-5 bg-body">
      <div className="container py-2">
        <div className="text-center mb-5 mx-auto" style={{ maxWidth: "40rem" }}>
          <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
            Visuals
          </p>
          <h1 className="display-6 fw-bold text-dark mb-3">Gallery</h1>
          <p className="text-secondary mb-0">
            Workshop and service moments — swap in your own photography anytime.
          </p>
        </div>
        <div className="row g-3 g-md-4">
          {gallerySamples.map((item, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={`${item.title}-${i}`}>
              <article className="card border-0 shadow-sm h-100 overflow-hidden equbal-gallery-card">
                <div className="ratio ratio-4x3 bg-light">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="object-fit-cover"
                    loading="lazy"
                  />
                </div>
                <div className="card-body py-2 px-3">
                  <p className="small text-secondary mb-0">{item.title}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
