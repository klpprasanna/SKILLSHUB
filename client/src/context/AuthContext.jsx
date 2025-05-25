import React, { createContext, useState, useEffect } from "react";
//import jwtDecode from "jwt-decode";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({ ...decoded, token });
      } catch {
        localStorage.removeItem("token");
      }
    }
  }, []);
  const login = (token) => {
    const decoded = jwtDecode(token);
    localStorage.setItem("token", token);
    setUser({ ...decoded, token });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
