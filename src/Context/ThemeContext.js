import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: " #1B2430",
    color: "white",
  },
  light: {
    backgroundColor: "#FFFF",
    color: "black",
  },
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
