"use client";
import { useCallback, useEffect, useState } from "react";

const STORAGE = "zotech-theme";

function readTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = useCallback(() => {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE, next);
    } catch {
      // ignore
    }
    setTheme(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-pressed={theme === "dark"}
      aria-label={
        theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
    >
      <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} />
    </button>
  );
};

export default ThemeToggle;
