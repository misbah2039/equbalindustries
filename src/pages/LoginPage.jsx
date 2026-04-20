import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const REG_KEY = "equbal_registered_users";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regMessage, setRegMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (login(email, password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password.");
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    try {
      const raw = localStorage.getItem(REG_KEY);
      const list = raw ? JSON.parse(raw) : [];
      list.push({
        name: regName.trim(),
        email: regEmail.trim().toLowerCase(),
        at: Date.now(),
      });
      localStorage.setItem(REG_KEY, JSON.stringify(list));
      setRegMessage("Registration saved. You can sign in with the admin email.");
      setRegName("");
      setRegEmail("");
      setRegPassword("");
    } catch {
      setRegMessage("Could not save. Try again.");
    }
  }

  return (
    <section className="section auth-section">
      <div className="container-wide auth-split-wrap">
        <div className="auth-split">
          <div className="auth-panel auth-panel-login">
            <h1 className="auth-title">Login</h1>
            <p className="auth-subtitle">
              Sign in to access Expenditure and other internal tools.
            </p>
            <form className="auth-form" onSubmit={handleLogin}>
              {error ? <p className="auth-error">{error}</p> : null}
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="auth-submit">
                Login
              </button>
            </form>
          </div>

          <div className="auth-panel auth-panel-register">
            <h2 className="auth-title">Registration</h2>
            <p className="auth-subtitle">
              Create a profile record. Admin login uses the company credentials.
            </p>
            <form className="auth-form" onSubmit={handleRegister}>
              {regMessage ? <p className="auth-success">{regMessage}</p> : null}
              <label htmlFor="reg-name">Full name</label>
              <input
                id="reg-name"
                type="text"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
              />
              <label htmlFor="reg-email">Email</label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
              <label htmlFor="reg-password">Password</label>
              <input
                id="reg-password"
                type="password"
                autoComplete="new-password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                minLength={6}
              />
              <button type="submit" className="auth-submit auth-submit-secondary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
