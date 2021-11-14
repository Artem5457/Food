export interface Recipe {
  idMeal: string;
  strArea: string | null;
  strCategory: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strYoutube: string | null;
  strSource: string;
}

export interface MyRecipe {
  id: number;
  strArea: string;
  strInstructions: string;
}
