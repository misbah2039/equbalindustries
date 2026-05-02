import { Link } from "react-router-dom";

/** Replace hrefs with your real profile URLs when ready. */
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          fill="currentColor"
          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          fill="currentColor"
          d="M6.5 8.5H3V20h3.5V8.5zM4.75 3.5a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM21 13.2c0-2.8-1.5-4.1-3.5-4.1-1 0-1.7.4-2.1 1h-.1V9H12v11h3.5v-5.5c0-1.3.2-2.6 1.9-2.6 1.6 0 1.6 1.5 1.6 2.7V20H21v-6.8z"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://twitter.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
        <path
          fill="currentColor"
          d="M18.9 3h3.1l-6.8 7.8L22.5 21h-6.3l-4.9-6.4L6 21H2.8l7.3-8.3L2 3h6.5l4.4 5.8L18.9 3zm-1.1 16h1.7L8.3 5H6.4l11.4 14z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          fill="currentColor"
          d="M21.6 7.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C15.6 3.5 12 3.5 12 3.5h0s-3.6 0-4.6.4c-.4 0-1.3.1-2.1 1-.7.7-.9 2.3-.9 2.3S4 9 4 10.8v1.4c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.5.2 7.5.2s3.6 0 4.6-.4c.4 0 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6zM10 14.9V8.5l5.2 3.2-5.2 3.2z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917518441997",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          fill="currentColor"
          d="M20.5 3.5A9.9 9.9 0 0 0 3.5 17.1L2 22l5.1-1.4A9.9 9.9 0 1 0 20.5 3.5zm-1.2 14.3c-.3.8-1.5 1.5-2.1 1.6-.5 0-1.1.3-3.6-1.1-3-1.4-4.9-4.9-5.1-5.1-.2-.3-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.7c.2 0 .5 0 .7.5.3.7 1 2.4 1 2.5s0 .5-.1.7l-.5.5c-.2.2-.4.5-.2 1s.7 2.3 1.5 3.6 2.2 2.4 2.5 2.6c.3.2.5.2.7.1l1-.5c.5-.3 1-.2 1.5.2s1.7 1.6 2 1.9.5.4.4.7z"
        />
      </svg>
    ),
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="equbal-footer mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="footer-heading h5">Equbal Industries &amp; Car Services</h3>
            <p className="mb-2">
              Industrial services, professional car care, and business solutions
              with consistent quality across Lucknow, Delhi, and Dehradun.
            </p>
            <p className="mb-3 fw-semibold text-white-50 small">
              Reliable service · Professional execution · Long-term value
            </p>
            <p className="footer-heading h6 text-uppercase small text-white-50 mb-2">
              Follow us
            </p>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0 equbal-footer-social">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    className="equbal-footer-social-link"
                    aria-label={s.name}
                    title={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading h6 text-uppercase small text-white-50">
              Contact
            </h4>
            <p className="mb-1">Phone: +91-7518441997</p>
            <p className="mb-0">
              Email:{" "}
              <a href="mailto:equbalindustries@gmail.com">
                equbalindustries@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading h6 text-uppercase small text-white-50">
              Offices
            </h4>
            <p className="mb-2 small">
              <strong className="text-white">Head:</strong> 4/40, 1st Floor,
              Viram Khand, Gomti Nagar, Lucknow — 226010
            </p>
            <p className="mb-2 small">
              <strong className="text-white">Delhi:</strong> 4545 Jai Mata
              Market Gali No 12, Trinagar, Near Kanhaiya Nagar Metro
            </p>
            <p className="mb-0 small">
              <strong className="text-white">Dehradun:</strong> Dalanwala,
              Uttarakhand
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 border-top border-secondary border-opacity-25 mt-4 pt-3">
          <p className="mb-0 small text-white-50">
            Copyright {year} Equbal Industries &amp; Car Services. All rights
            reserved.
          </p>
          <div className="d-flex gap-3 small">
            <Link to="/services" className="text-decoration-none">
              Services
            </Link>
            <Link to="/equipment" className="text-decoration-none">
              Equipment
            </Link>
            <Link to="/blog" className="text-decoration-none">
              Blog
            </Link>
            <Link to="/contact" className="text-decoration-none">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
