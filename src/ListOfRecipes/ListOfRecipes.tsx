import React from 'react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';

type Props = {
  ourRecipes: Recipe[],
};

export const ListOfRecipes: React.FC<Props> = ({ ourRecipes }) => {
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
        {ourRecipes.map(recipe => (
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
