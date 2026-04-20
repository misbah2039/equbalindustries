import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "equbal_auth";

export const VALID_LOGIN = {
  email: "equbalindustries@gmail.com",
  password: "Equbal@123",
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  const login = useCallback((email, password) => {
    const ok =
      email.trim().toLowerCase() === VALID_LOGIN.email.toLowerCase() &&
      password === VALID_LOGIN.password;
    if (ok) {
      localStorage.setItem(STORAGE_KEY, "1");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
