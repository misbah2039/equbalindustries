import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VALID_LOGIN } from "../auth/constants";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/company-documents";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (login(email, password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid admin credentials.");
    }
  }

  return (
    <section className="equbal-auth-shell d-flex align-items-center py-4 py-lg-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card equbal-auth-card">
              <div className="row g-0">
                <div className="col-lg-5 equbal-auth-hero d-flex align-items-center">
                  <div className="equbal-auth-hero-inner w-100">
                    <p className="text-warning text-uppercase small fw-bold letter-spacing mb-2">
                      Internal access
                    </p>
                    <h1 className="h3 fw-bold mb-3">Admin sign in</h1>
                    <p className="text-white-50 small mb-0">
                      For company expenditure and{" "}
                      <strong className="text-white">document downloads</strong>{" "}
                      (certificates, registrations). Customer enquiries: use{" "}
                      <Link
                        to="/contact"
                        className="text-warning text-decoration-none"
                      >
                        Contact
                      </Link>{" "}
                      or WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7 bg-white">
                  <div className="p-4 p-md-5">
                    <h2 className="h4 fw-bold text-dark mb-1">Administrator</h2>
                    <p className="text-secondary small mb-4">
                      Use the admin email and password configured for this build
                      (see <code className="small">src/auth/constants.js</code>
                      ).
                    </p>
                    <form onSubmit={handleLogin}>
                      {error ? (
                        <div
                          className="alert alert-danger py-2 small"
                          role="alert"
                        >
                          {error}
                        </div>
                      ) : null}
                      <div className="mb-3">
                        <label
                          htmlFor="login-email"
                          className="form-label fw-semibold small"
                        >
                          Email
                        </label>
                        <input
                          id="login-email"
                          type="email"
                          className="form-control form-control-lg"
                          autoComplete="username"
                          placeholder={VALID_LOGIN.email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="login-password"
                          className="form-label fw-semibold small"
                        >
                          Password
                        </label>
                        <input
                          id="login-password"
                          type="password"
                          className="form-control form-control-lg"
                          autoComplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold"
                      >
                        Sign in as admin
                      </button>
                      <p className="text-center text-secondary small mt-3 mb-0">
                        <Link to="/" className="text-decoration-none">
                          ← Back to home
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
