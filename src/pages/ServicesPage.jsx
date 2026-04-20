import { serviceCategories } from "../data/content";

function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="page-title">Services</h2>
        <p className="page-intro">
          Our services are organized into three categories.
        </p>

        <div className="service-category-grid">
          {serviceCategories.map((category) => (
            <article className="service-category-card" key={category.title}>
              <div className="service-category-image">
                <img src={category.imagePath} alt={category.imageAlt} />
              </div>
              {/* <p className="image-path-note">Image path: {category.imagePath}</p> */}

              <h3>{category.title}</h3>
              <ul className="service-list">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
