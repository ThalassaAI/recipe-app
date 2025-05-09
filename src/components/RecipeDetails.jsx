import React from "react";
import Rating from "./Rating";

function RecipeDetails({
  name,
  ingredients,
  instructions,
  image,
  cookTimeMinutes,
  servings,
  difficulty,
  cuisine,
  caloriesPerServing,
  tags = [],
  userId,
  rating,
  reviewCount,
  mealType = [],
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={name} className="img-fluid" />

          <h5 className="mt-3 mb-3">
            Tags:
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary ms-2 ">
                {tag}
              </span>
            ))}
          </h5>

          <div className="border border-secondary-subtle rounded-3 p-2">
            <h5>Meal Details:</h5>
            <ul>
              <li>Meal type: {mealType.join(", ")}</li>
              <li>Cuisine: {cuisine}</li>
              <li>Difficulty: {difficulty}</li>
              <li>
                Prep time: {cookTimeMinutes}min <i class="bi bi-alarm"></i>
              </li>
              <li>
                Servings: {servings} <i class="bi bi-people"></i>
              </li>
              <li>Calories per serving: {caloriesPerServing}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{name}</h1>

          <Rating rating={rating} showRating={true} className="mb-4 fs-5" />

          <div className="border border-secondary-subtle rounded-3 p-2 mb-3">
            <h5>Ingredients:</h5>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-secondary-subtle rounded-3 p-2">
            <h5>Instructions:</h5>
            <ol>
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
