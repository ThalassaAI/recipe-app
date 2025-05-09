import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesList({ recipes = [] }) {
  return (
    <div className="row g-3">
      {recipes.map((recipe) => (
        <div className="col-md-4" key={recipe.id}>
          <RecipeCard {...recipe} />
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
