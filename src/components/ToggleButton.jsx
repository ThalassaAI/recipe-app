import React from "react";
import { useTheme } from "../hooks";

function ToggleButton() {
  const { isLightTheme, toggleTheme } = useTheme();

  const classContainer = isLightTheme
    ? "btn btn-light rounded-circle"
    : "btn btn-light rounded-circle";

  return (
    <button className={classContainer} type="button" onClick={toggleTheme}>
      {isLightTheme ? (
        <i class="bi bi-brightness-high-fill"></i>
      ) : (
        <i class="bi bi-moon-stars-fill"></i>
      )}
    </button>
  );
}

export default ToggleButton;
