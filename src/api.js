// API functions
export async function fetchRecipesByIngredient(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  return response.json();
}

export async function fetchRecipeDetails(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.json();
}
