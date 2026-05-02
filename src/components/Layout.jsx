import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppFloat from "./WhatsAppFloat";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <a href="#main-content" className="equbal-skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="equbal-main flex-grow-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
