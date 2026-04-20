import { gallerySamples } from "../data/content";

function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="page-title">Gallery</h2>
        <p className="page-intro">
          Add your workshop and service photos here. This section is ready for
          real image integration.
        </p>
        <div className="gallery-grid">
          {gallerySamples.map((item) => (
            <div className="gallery-item" key={item.title}>
              <img src={item.imagePath} alt={item.title} />
              <p>{item.title}</p>
              {/* <p className="image-path-note">Image path: {item.imagePath}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
