import React from 'react';
import { MdContrast } from "react-icons/md";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  const blue = "var(--primary-blue)";

  return (
    <button
      className="dark-mode-toggle-btn"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0.5em",
        borderRadius: "50%",
        transition: "background 0.2s",
        fontSize: "1.8em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <MdContrast className="dark-mode-toggle-icon" />
    </button>
  );
}