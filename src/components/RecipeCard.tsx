import React from 'react';
import { Recipe } from '../types/recipe';

type Props = {
  recipe: Recipe;
};

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <>
      <div
        className="
        shadow-md
        rounded-md
        overflow-hidden
        bg-white"
        style={{ width: '310px' }}
      >
        <img
          src={(recipe.strMealThumb === null)
            ? '/img/Placeholder.png'
            : recipe.strMealThumb}
          className="
          rounded-lg
          shadow-xl
          mb-4
        "
          alt=""
        />

        <div className="text-center">
          <h5 className="
          text-xl
          font-semibold
          mb-2"
          >
            {recipe.strArea}
            {' '}
            {recipe.strCategory}
          </h5>

          <div
            className="
            mb-4
            h-36
            overflow-hidden
            overflow-ellipsis"
          >
            {recipe.strInstructions}
          </div>
          <a href={recipe.strSource} style={{ color: 'blue' }}>
            Link
          </a>

        </div>
      </div>
    </>
  );
};
