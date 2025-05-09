import React from "react";
import { useTheme } from "../hooks";

function ToggleButton() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <button
      className="btn btn-outline-primary rounded-circle"
      type="button"
      onClick={toggleTheme}
    >
      {isLightTheme ? (
        <i class="bi bi-brightness-high-fill"></i>
      ) : (
        <i class="bi bi-moon-stars-fill"></i>
      )}
    </button>
  );
}

export default ToggleButton;
