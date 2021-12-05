import { useContext } from 'react';
import { RecipeCard } from './RecipeCard';
import StatusContext from '../context';
import { Recipe } from '../types/recipe';

export const ListOfRecipes = () => {
  const { ourRecipes } = useContext(StatusContext);

  return (
    <>
      <h1
        className="
          text-center
          pt-10
          text-3xl"
      >
        My favourite recipes from catalog:
      </h1>
      <ul className="
          list-none
          flex
          flex-wrap
          justify-center
          my-16
          gap-9"
      >
        {ourRecipes.map((recipe: Recipe) => (
          <li
            key={recipe.strInstructions}
          >
            <RecipeCard
              recipe={recipe}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
