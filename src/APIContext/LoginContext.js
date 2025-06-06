import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const login = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
