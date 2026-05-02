/* Context + hook pattern; hook must live next to provider */
/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { VALID_LOGIN } from "../auth/constants";

const STORAGE_KEY = "equbal_auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  /** Admin (company) credentials only */
  const login = useCallback((email, password) => {
    const e = email.trim().toLowerCase();
    const pwd = password;
    if (e === VALID_LOGIN.email.toLowerCase() && pwd === VALID_LOGIN.password) {
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
    [isAuthenticated, login, logout],
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
