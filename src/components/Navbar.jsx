import Collapse from "bootstrap/js/dist/collapse";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const baseNavItems = [
  { label: "Home", path: "/", end: true },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Equipment", path: "/equipment" },
  { label: "Customers", path: "/customers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [showLogoFallback, setShowLogoFallback] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const logoPath = "companylogos.jpg";

  const closeMobileMenu = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 992px)").matches) return;
    const el = document.getElementById("equbalNavbar");
    if (!el?.classList.contains("show")) return;
    Collapse.getOrCreateInstance(el).hide();
  }, []);

  const navItems = isAuthenticated
    ? [
        ...baseNavItems,
        { label: "Documents", path: "/company-documents" },
        { label: "Expenditure", path: "/expenditure" },
      ]
    : baseNavItems;

  useEffect(() => {
    const el = document.getElementById("equbalNavbar");
    if (!el) return undefined;
    const onShown = () => {
      document.body.style.overflow = "hidden";
    };
    const onHidden = () => {
      document.body.style.overflow = "";
    };
    el.addEventListener("shown.bs.collapse", onShown);
    el.addEventListener("hidden.bs.collapse", onHidden);
    return () => {
      el.removeEventListener("shown.bs.collapse", onShown);
      el.removeEventListener("hidden.bs.collapse", onHidden);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top equbal-navbar equbal-navbar-advanced mb-0"
      aria-label="Primary"
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center gap-2 gap-sm-3 py-1"
          to="/"
          onClick={closeMobileMenu}
        >
          <span className="equbal-brand-mark">
            {!showLogoFallback ? (
              <img
                src={logoPath}
                alt="Equbal logo"
                className="equbal-brand-img"
                width={60}
                height={60}
                onError={() => setShowLogoFallback(true)}
              />
            ) : (
              <span className="equbal-brand-fallback" aria-hidden>
                EI
              </span>
            )}
          </span>
          <span className="equbal-brand-text d-none d-md-flex flex-column lh-sm">
            <span className="equbal-brand-title">Equbal Industries</span>
            <span className="equbal-brand-sub">&amp; Car Services</span>
          </span>
        </Link>

        <button
          className="navbar-toggler border-0 shadow-sm equbal-nav-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#equbalNavbar"
          aria-controls="equbalNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="equbalNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1 py-2 py-lg-0 equbal-nav-list">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `nav-link rounded-pill px-3 equbal-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 pt-2 pt-lg-0 border-top border-secondary border-opacity-25 mt-2 mt-lg-0 border-lg-0">
              {isAuthenticated ? (
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm rounded-pill px-3 w-100 w-lg-auto"
                  onClick={() => {
                    logout();
                    closeMobileMenu();
                  }}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `btn btn-sm rounded-pill px-4 fw-semibold w-100 w-lg-auto equbal-nav-signin ${
                      isActive ? "btn-light text-dark" : "btn-outline-light"
                    }`
                  }
                >
                  Admin
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
