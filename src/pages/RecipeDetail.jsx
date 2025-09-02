import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipeDetails } from "../api";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function loadRecipe() {
      const data = await fetchRecipeDetails(id);
      if (data.meals) {
        setRecipe(data.meals[0]);
      }
    }
    loadRecipe();
  }, [id]);

  if (!recipe) return <p className="info-text">Loading recipe details...</p>;

  return (
    <div className="recipe-detail">
      {/* 🔹 Back Button at Top Left */}
      <div className="back-btn">
        <Link to="/">
          ⬅ Back to Home
        </Link>
      </div>

      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>Category: {recipe.strCategory}</h3>
      <h3>Cuisine: {recipe.strArea}</h3>
      <p><strong>Instructions:</strong></p>
      <p className="instructions">{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;
