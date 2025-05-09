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
    // <div>
    //   <FilterByDifficulty />
    //   <FilterByMealType />
    //   <RecipesList />
    // </div>
    <div className="container">
      <div className="row mb-3 mt-3">
        <div className="offset-md-6 col-md-3">
          <FilterByDifficulty />
        </div>
        <div className="col-md-3">
          <FilterByMealType />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12  g-0">
          <RecipesList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;
