import PropTypes from "prop-types";
import { valuableCustomers } from "../data/content";

function clampQuote(text, max = 50) {
  const t = (text || "").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

function StarRating({ value }) {
  const label = `${value} out of 5 stars`;
  const filled = Math.min(5, Math.floor(value));
  const partial = value - filled >= 0.5;
  return (
    <div className="equbal-star-row" aria-label={label}>
      {[1, 2, 3, 4, 5].map((i) => {
        let cls = "equbal-star equbal-star--off";
        if (i <= filled) cls = "equbal-star equbal-star--on";
        else if (partial && i === filled + 1)
          cls = "equbal-star equbal-star--half";
        return (
          <span key={i} className={cls} aria-hidden>
            ★
          </span>
        );
      })}
      <span className="small fw-semibold text-dark ms-1">
        {value.toFixed(1)} / 5
      </span>
    </div>
  );
}

StarRating.propTypes = {
  value: PropTypes.number.isRequired,
};

function CustomerPage() {
  return (
    <section className="py-5 bg-body">
      <div className="container py-2">
        <div className="mb-5">
          <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
            Relationships
          </p>
          <h1 className="display-6 fw-bold text-dark mb-3">
            Our valuable customers
          </h1>
          <p className="text-secondary mb-0" style={{ maxWidth: "40rem" }}>
            {/* Ratings and short feedback (max 50 characters) under each photo. */}
          </p>
        </div>

        <div className="row g-4">
          {valuableCustomers.map((customer, i) => (
            <div className="col-md-6 col-lg-4" key={`${customer.name}-${i}`}>
              <article className="card h-100 border-0 shadow-sm overflow-hidden equbal-customer-card">
                <div className="ratio ratio-4x3 bg-light">
                  <img
                    src={customer.imagePath}
                    alt={customer.name}
                    className="object-fit-cover"
                  />
                </div>
                <div className="card-body p-4">
                  <h2 className="h5 fw-bold text-dark mb-2">{customer.name}</h2>
                  <StarRating value={customer.rating ?? 5} />
                  <blockquote className="equbal-customer-quote small text-secondary mt-3 mb-0">
                    “{clampQuote(customer.shortQuote ?? "", 50)}”
                  </blockquote>
                  {/* <p className="text-muted small mt-2 mb-0 border-top pt-2">
                    {customer.description}
                  </p> */}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerPage;
