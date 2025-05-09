import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
