import { valuableCustomers } from "../data/content";

function CustomerPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="page-title">Our Valuable Customers</h2>
        <p className="page-intro">
          We are proud to work with trusted customers across multiple business
          sectors.
        </p>

        <div className="grid-cards">
          {valuableCustomers.map((customer) => (
            <article className="card" key={customer.name}>
              <img
                src={customer.imagePath}
                alt={customer.name}
                className="customer-image"
              />
              <h3>{customer.name}</h3>
              <p>{customer.description}</p>
              {/* <p className="image-path-note">Image path: {customer.imagePath}</p> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerPage;
