import React from "react";
import { useParams } from "react-router";
import { useRecipes } from "../hooks";
import { RecipeDetails } from "../components";

/**
"prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 166,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]
 */

function RecipeDetailsPage() {
  const { id } = useParams();
  const { loading, error, getRecipeById } = useRecipes();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const recipe = getRecipeById(id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return <RecipeDetails {...recipe} />;
}

export default RecipeDetailsPage;
