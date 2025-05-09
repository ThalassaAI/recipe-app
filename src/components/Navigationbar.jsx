import React from "react";
import reactSvg from "../assets/react.svg";
import recipe50 from "../assets/recipe50.png";
import recipe100 from "../assets/recipe100.png";
import { useTheme } from "../hooks";
import ToggleButton from "./ToggleButton";

function Navigationbar() {
  const { isLightTheme } = useTheme();

  const classContainer = isLightTheme
    ? "navbar border-bottom border-danger"
    : "navbar bg-dark border-bottom border-body";

  const dataBsTheme = isLightTheme ? "light" : "dark";

  // const style = undefined;
  const style = isLightTheme
    ? {
        backgroundColor: "#E1306C",
      }
    : undefined;

  const imageStyle = {
    filter: "invert(1)",
  };
  // const imageStyle = !isLightTheme
  //   ? {
  //       filter: "invert(1)",
  //     }
  //   : undefined;

  const linkStyle = {
    color: "white",
  };

  return (
    <nav className={classContainer} data-bs-theme={dataBsTheme} style={style}>
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="/"
          style={linkStyle}
        >
          <img
            src={recipe100}
            alt="Logo"
            // width="30"
            height="30"
            className="d-inline-block align-text-top"
            loading="lazy"
            style={imageStyle}
          />
          Recipe App
        </a>
        <ToggleButton />
      </div>
    </nav>
  );
}

export default Navigationbar;
