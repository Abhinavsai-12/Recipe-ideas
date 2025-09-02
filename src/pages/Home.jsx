import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipesByIngredient } from "../api";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ingredient) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchRecipesByIngredient(ingredient);
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found. Try another ingredient.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="info-text">Loading recipes...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
