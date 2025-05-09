import { createBrowserRouter } from "react-router";
import { RecipeDetailsPage, RecipesListPage } from "../pages";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <RecipesListPage />,
      },
      {
        path: "recipe/:id",
        element: <RecipeDetailsPage />,
      },
    ],
  },
]);

export default router;
