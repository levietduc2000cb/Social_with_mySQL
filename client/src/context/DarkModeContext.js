import { createContext, useEffect, useState } from "react";

export const DarkModeContex = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toogle = () => {
    setDarkMode((pre) => !pre);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContex.Provider value={{ darkMode, toogle }}>
      {children}
    </DarkModeContex.Provider>
  );
};
