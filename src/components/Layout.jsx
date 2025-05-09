import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navigationbar from "./Navigationbar";
import { useTheme } from "../hooks";

function Layout() {
  const { isLightTheme } = useTheme();

  const classContainer = isLightTheme
    ? "bg-light text-dark"
    : "bg-dark text-light";

  return (
    <>
      <div
        className={classContainer}
        style={{ minHeight: "100vh", backgroundColor: "lightcoral" }}
      >
        <Navigationbar />
        <ScrollRestoration />

        <main className="container py-5">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
