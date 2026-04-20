import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const baseNavItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Customers", path: "/customers" },
  { label: "Partners", path: "/partners" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [showLogoFallback, setShowLogoFallback] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const logoPath = "companylogo.jpeg";

  const navItems = isAuthenticated
    ? [...baseNavItems, { label: "Expenditure", path: "/expenditure" }]
    : baseNavItems;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${menuOpen ? "nav-open" : ""}`}>
      <div className="container nav-wrap">
        <div className="brand">
          <div className="brand-logo">
            {!showLogoFallback ? (
              <img
                src={logoPath}
                alt="Equbal company logo"
                className="brand-logo-image"
                onError={() => setShowLogoFallback(true)}
              />
            ) : (
              <span>Logo</span>
            )}
          </div>
          <div className="brand-text">
            <h1>Equbal Industry and Car Services</h1>
          </div>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-burger-bar" />
          <span className="nav-burger-bar" />
          <span className="nav-burger-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`nav-menu ${menuOpen ? "nav-menu-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button
              type="button"
              className="nav-link nav-logout"
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-login nav-link-active" : "nav-link nav-link-login"
              }
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-hidden
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}

export default Navbar;
