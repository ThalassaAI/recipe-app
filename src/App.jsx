import React from "react";
import { RecipesProvider, ThemeProvider } from "./context";
import { Layout } from "./components";

function App() {
  return (
    <ThemeProvider>
      <RecipesProvider>
        <Layout />
      </RecipesProvider>
    </ThemeProvider>
  );
}

export default App;
