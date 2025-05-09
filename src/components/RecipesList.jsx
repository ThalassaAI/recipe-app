import React from "react";
import RecipeCard from "./RecipeCard";

function RecipesList({ recipes = [] }) {
  return (
    <>
      {recipes.map((recipe) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={recipe.id}>
          <RecipeCard {...recipe} />
        </div>
      ))}
    </>
  );
}

export default RecipesList;
