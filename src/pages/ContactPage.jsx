function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-wrap">
        <div>
          <h2 className="page-title">Contact Us</h2>
          <p>
            Reach out for car servicing, industrial maintenance support, or
            custom service contracts.
          </p>
          <p>
            <strong>Phone:</strong> +91-7518441997
          </p>
          <p>
            <strong>Email:</strong> equbalindustries@gmail.com
          </p>
          <p>
            <strong>Working Hours:</strong> Mon-Sun, 9:00 AM to 9:00 PM
          </p>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />

          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="Your number" />
          {/* <label htmlFor="service">Service Requirement</label>
          <select name="service" id="service">
            <option value="car-servicing">Car Servicing</option>
            <option value="industrial-maintenance">
              Industrial Maintenance
            </option>
            <option value="custom-service-contracts">
              Custom Service Contracts
            </option>
          </select> */}
          <label htmlFor="message">Service Requirement</label>
          <textarea id="message" rows="5" placeholder="Tell us what you need" />

          <button type="button">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
