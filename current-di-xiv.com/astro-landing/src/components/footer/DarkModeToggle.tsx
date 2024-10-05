import React, { useState, useEffect } from "react";

// Define the type for the theme state
type Theme = "light" | "dark" | "system";

// Define the paths for the SVG icons
const lightIcon = "/icons/dark-mode/light.svg";
const darkIcon = "/icons/dark-mode/dark.svg";
const systemIcon = "/icons/dark-mode/fluent-mdl2--system.svg";

const DarkModeToggle: React.FC = () => {
  // State to manage the current theme
  const [theme, setTheme] = useState<Theme>("system");

  // Effect to set the initial theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  // Function to apply the theme
  const applyTheme = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  };

  // Function to toggle the theme
  const toggleTheme = () => {
    let newTheme: Theme;
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "system";
    } else {
      newTheme = "light";
    }
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Determine the current icon based on the theme
  const currentIcon =
    theme === "light" ? lightIcon : theme === "dark" ? darkIcon : systemIcon;

  return (
    <button onClick={toggleTheme} className="p-2 rounded focus:outline-none">
      <img
        src={currentIcon}
        alt="Toggle Theme"
        className="w-6 h-6 transition-transform duration-300 ease-in-out"
      />
    </button>
  );
};

export default DarkModeToggle;
