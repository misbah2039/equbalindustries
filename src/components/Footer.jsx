function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <h3>Equbal Industry and Car Services</h3>
          <p>
            Trusted partner for industrial services, mobility support, and
            business solutions across multiple domains.
          </p>
          <p className="footer-tagline">
            Reliable service, professional execution, long-term value.
          </p>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Phone: +91-7518441997</p>
          <p>Email: equbalindustries@gmail.com</p>
        </div>

        <div className="footer-column">
          <h4>Offices</h4>
          <p>
            Head Office: 4/40, 1st Floor, Viram Khand, Gomti Nagar, Lucknow -
            226010
          </p>
          <p>
            Branch Office: 4545 Jai Mata Market Gali No 12, Trinagar, Near
            Kanhaiya Nagar Metro Station, Delhi
          </p>
          <p>Branch Office: Dalanwala, Dehradun (Uttarakhand)</p>
        </div>
      </div>
      <p className="copyright">
        Copyright {new Date().getFullYear()} Equbal Industry and Car Services.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
