import React from "react";
import { Link } from "react-router";
import Rating from "./Rating";
import LazyImage from "./LazyImage";
import { useTheme } from "../hooks";

function RecipeCard({
  id,
  name,
  image,
  difficulty,
  cuisine,
  mealType,
  rating,
}) {
  const { isLightTheme } = useTheme();

  const cardClass = isLightTheme ? "" : "bg-dark text-light border-secondary";

  return (
    <Link
      className={`card h-100 text-decoration-none shadow-sm ${cardClass}`}
      to={`/recipe/${id}`}
    >
      <LazyImage src={image} alt={name} className="card-img-top" />
      {/* <img
    src={image}
    alt={name}
    className="card-img-top"
  /> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Rating rating={rating} className="mb-2" showRating />
        <h6
          className={`card-subtitle mb-2 ${
            isLightTheme ? "text-body-secondary" : ""
          }`}
        >
          Difficulty: {difficulty}
        </h6>
        <h6
          className={`card-text ${isLightTheme ? "text-body-secondary" : ""}`}
        >
          Cuisine: {cuisine}
          {mealType.map((meal) => (
            <span key={meal} className="badge bg-primary ms-2 text-uppercase">
              {meal}
            </span>
          ))}
        </h6>
      </div>
    </Link>
  );
}

export default RecipeCard;
