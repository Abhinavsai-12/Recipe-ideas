import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <Link to={`/recipe/${recipe.idMeal}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;
