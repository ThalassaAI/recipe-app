import { useState, createContext, useMemo, useCallback } from "react";

const ThemeContext = createContext({
  isLightTheme: true,
  toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsLightTheme((prevTheme) => !prevTheme);
  }, []);

  const themeContext = useMemo(() => {
    return {
      isLightTheme,
      toggleTheme,
    };
  }, [isLightTheme, toggleTheme]);

  // console.log(themeContext);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
