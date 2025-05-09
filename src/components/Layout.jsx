import React from "react";
import { Outlet } from "react-router";
import Navigationbar from "./Navigationbar";
import { useTheme } from "../hooks";

function Layout() {
  const { isLightTheme } = useTheme();

  const classContainer = isLightTheme
    ? "bg-light text-dark"
    : "bg-dark text-light";
  return (
    <>
      <div className={classContainer} style={{ minHeight: "100vh" }}>
        <Navigationbar />
        <div className="pb-5 pt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
