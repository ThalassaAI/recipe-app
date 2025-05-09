import React from "react";
import {
  FilterByDifficulty,
  FilterByMealType,
  RecipesList,
} from "../components";
import { useRecipes } from "../hooks";

function RecipesPage() {
  const {
    loading,
    error,
    filteredRecipes: recipes,
    // recipes,
    // mealTypes,
    // activeFilters,
    // difficulties,
  } = useRecipes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!recipes) {
    return <div>No recipes found.</div>;
  }

  return (
    <>
      <div className="row justify-content-end mb-3">
        <div className="col-auto">
          <FilterByDifficulty />
        </div>
        <div className="col-auto">
          <FilterByMealType />
        </div>
      </div>
      <div className="row g-4">
        <RecipesList recipes={recipes} />
      </div>
    </>
  );
}

export default RecipesPage;
