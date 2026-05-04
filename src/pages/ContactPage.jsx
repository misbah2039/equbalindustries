import { useState } from "react";
import { Link } from "react-router-dom";

const INQUIRY_KEY = "equbal_inquiries";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const trimmed = message.trim();
    if (trimmed.length < 12) {
      setError(
        "Please add a bit more detail (at least 12 characters) so we can help.",
      );
      return;
    }
    try {
      const raw = localStorage.getItem(INQUIRY_KEY);
      const list = raw ? JSON.parse(raw) : [];
      list.push({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: trimmed,
        at: Date.now(),
      });
      localStorage.setItem(INQUIRY_KEY, JSON.stringify(list.slice(-50)));
    } catch {
      /* still show success — form UX matters more than storage */
    }
    setSent(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <section className="py-5 bg-body">
      <div className="container py-2">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <p className="text-primary fw-semibold small text-uppercase letter-spacing mb-2">
              Get in touch
            </p>
            <h1 className="display-6 fw-bold text-dark mb-3">Contact us</h1>
            <p className="text-secondary mb-4">
              Car servicing, industrial support, or custom contracts — tell us
              what you need. For urgent jobs, calling is fastest.
            </p>
            <ul className="list-unstyled d-grid gap-3 small">
              <li>
                <strong className="d-block text-dark">Phone</strong>
                <a href="tel:+917518441997" className="text-decoration-none">
                  +91-7518441997
                </a>
              </li>
              <li>
                <strong className="d-block text-dark">Email</strong>
                <a
                  href="mailto:equbalindustries@gmail.com"
                  className="text-decoration-none"
                >
                  equbalindustries@gmail.com
                </a>
              </li>
              <li>
                <strong className="d-block text-dark">Hours</strong>
                Mon–Sun, 6:00 AM – 9:00 PM
              </li>
            </ul>
            <p className="small text-muted mt-4 mb-0">
              Prefer browsing first?{" "}
              <Link to="/services" className="fw-semibold">
                Services
              </Link>{" "}
              ·{" "}
              <Link to="/equipment" className="fw-semibold">
                Equipment
              </Link>
            </p>
          </div>
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4">
              <h2 className="h5 fw-bold mb-1">Send an inquiry</h2>
              <p className="text-secondary small mb-4">
                We keep a copy in your browser (demo) and you can still email us
                directly anytime.
              </p>

              {sent ? (
                <div
                  className="alert alert-success border-0 rounded-3 mb-0"
                  role="status"
                >
                  <strong className="d-block mb-1">
                    Thanks — we received that.
                  </strong>
                  <span className="small d-block mb-2">
                    We usually respond within one business day. For emergencies,
                    call the number on the left.
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success rounded-pill"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="d-grid gap-3"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {error ? (
                    <div
                      className="alert alert-warning py-2 small mb-0"
                      role="alert"
                    >
                      {error}
                    </div>
                  ) : null}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="form-label small fw-semibold"
                    >
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="form-label small fw-semibold"
                    >
                      Email{" "}
                      <span className="text-muted fw-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="form-label small fw-semibold"
                    >
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-control form-control-lg"
                      placeholder="Your number"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="form-label small fw-semibold"
                    >
                      What do you need? <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className="form-control"
                      placeholder="Vehicle type, location, timeline, or project scope…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      minLength={12}
                    />
                    <div className="form-text">
                      Tip: include city and whether it is fleet or one-off work.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill fw-semibold px-4"
                  >
                    Submit inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
